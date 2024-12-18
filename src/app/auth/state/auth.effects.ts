import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, autoLogout, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { setErrorMessage, setLoadingSpinner } from "../../store/shared/shared.action";
import { of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {

  private authService = inject(AuthService);
  actions$ = inject(Actions);

  constructor(private store: Store<AppState>, private router: Router) { }

  //constructor(private actions$: Actions, private authService: AuthService) {

  //  console.log('actions$: ', this.actions$)
  //}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));

            const user = this.authService.formatUser(data);

            this.authService.setUserInLocalStorage(user);

            return loginSuccess({ user, redirect: true });
          }),
            catchError((errorResponse) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));

              console.log(errorResponse.error.error.message);

              const errorMessage = this.authService.getErrorMessage(errorResponse.error.error.message)

              return of(setErrorMessage({ message: errorMessage }))
            })
          )
      }))
  })

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[loginSuccess, signupSuccess]),
      tap(action => {
        this.store.dispatch(setErrorMessage({ message: '' }));
        if (action.redirect){
          this.router.navigate(['/'])
        }
      }))
  }, { dispatch: false })


  //mozna zrobic w oftype array
  //signUpRedirect$ = createEffect(() => {
  //  return this.actions$.pipe(ofType(signupSuccess), tap(action => {
  //    this.store.dispatch(setErrorMessage({ message: '' }));
  //    this.router.navigate(['/'])
  //  }))

  //}, { dispatch: false })


  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            //this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return signupSuccess({ user, redirect: true })
          }),
          catchError((errorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));

            console.log(errorResponse.error.error.message);

            const errorMessage = this.authService.getErrorMessage(errorResponse.error.error.message)

            return of(setErrorMessage({ message: errorMessage }))
          })
        )
      }))
  })

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        console.log(user);
        return of(loginSuccess({ user, redirect: false }))
      })
    )
  })

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogout),
      map(action => {
        this.authService.logout();
        this.router.navigate(['auth'])
      })
    )
  },{dispatch: false})


}

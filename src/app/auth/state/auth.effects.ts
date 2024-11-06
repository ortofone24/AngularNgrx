import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
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

            return loginSuccess({ user });
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
    return this.actions$.pipe(ofType(loginSuccess), tap(action => {
      this.router.navigate(['/'])
    }))

  }, { dispatch: false })

}

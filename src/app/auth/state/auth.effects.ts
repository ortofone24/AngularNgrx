import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { setLoadingSpinner } from "../../store/shared/shared.action";


@Injectable()
export class AuthEffects {

  private authService = inject(AuthService);
  actions$ = inject(Actions);

  constructor(private store: Store<AppState>) { }

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

            const user = this.authService.formatUser(data);

            return loginSuccess({ user });
          }))
      }))
  })

}

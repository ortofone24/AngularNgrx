import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";


@Injectable()
export class AuthEffects {

  private authService = inject(AuthService);
  actions$ = inject(Actions);

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

            const user = this.authService.formatUser(data);

            return loginSuccess({ user });
          }))
      }))
  })

}

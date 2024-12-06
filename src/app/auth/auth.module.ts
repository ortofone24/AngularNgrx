import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { provideState } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { authReducer } from "./state/auth.reducer";
import { EffectsModule, provideEffects } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
]

//const routes: Routes = [
//  {
//    path: '',
//    component: LoginComponent,
//  }
//];


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    LoginComponent,
    SignupComponent
    /*EffectsModule.forFeature([AuthEffects])*/
  ],
    providers: [
      provideState(AUTH_STATE_NAME, authReducer),
      //provideEffects(AuthEffects)
  ]

})
export class AuthModule {

}

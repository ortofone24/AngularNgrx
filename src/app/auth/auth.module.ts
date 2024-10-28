import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { provideState } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { authReducer } from "./state/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
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
    EffectsModule.forFeature([AuthEffects])
  ],
    providers: [
      provideState(AUTH_STATE_NAME, authReducer),
  ]

})
export class AuthModule {

}

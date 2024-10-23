import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

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
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes), LoginComponent]

})
export class AuthModule {

}

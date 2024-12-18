import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AuthEffects } from '../state/auth.effects';
import { setLoadingSpinner } from '../../store/shared/shared.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  //providers: [provideEffects()],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onLoginSubmit() {
    console.log("Hanusia");
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.store.dispatch(setLoadingSpinner({status: true}))

    this.store.dispatch(loginStart({ email, password }));
  }
}

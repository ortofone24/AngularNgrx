import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store, provideState } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { AUTH_STATE_NAME, isAuthenticated } from '../../../auth/state/auth.selector';
import { authReducer } from '../../../auth/state/auth.reducer';
import { autoLogin, autoLogout } from '../../../auth/state/auth.actions';
import e from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isAuthenticated!: Observable<boolean>

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.isAuthenticated = this.store.select(isAuthenticated);
    //this.store.dispatch(autoLogin())
  }


  onLogout(event: Event) {
  event.preventDefault();
  this.store.dispatch(autoLogout());
  }
}

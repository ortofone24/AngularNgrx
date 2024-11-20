import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getErorrMessage, getLoading } from './store/shared/shared.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent, HeaderComponent, LoadingSpinnerComponent, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'AngularNgrx';
  showLoading!: Observable<boolean>
  errorMessage!: Observable<string>


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErorrMessage);
    this.store.dispatch(autoLogin())
  }
}


/*AsyncPipe, CommonModule,*/

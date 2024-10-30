import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { decrement, increment, reset } from '../state/counter/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent implements OnInit {

  //@Output() increment = new EventEmitter<void>();
  //@Output() decrement = new EventEmitter<void>();
  //@Output() reset = new EventEmitter<void>();

  /* constructor(private counterService: CounterService) { }*/
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
  }

  ngOnInit(): void {

  }

  onIncrement() {
    /*this.increment.emit();*/
    //this.counterService.increment();
    this.store.dispatch(increment())
  }

  onDecrement() {
    /*this.decrement.emit();*/
    //this.counterService.decrement();
    this.store.dispatch(decrement())
  }

  onReset() {
    /*this.reset.emit();*/
    //this.counterService.reset();
    this.store.dispatch(reset())
  }

}

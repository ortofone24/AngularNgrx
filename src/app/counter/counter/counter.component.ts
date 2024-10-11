import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent, AsyncPipe, CommonModule, CustomCounterInputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  //counter: number = 0;
  counter$!: Observable<number>;
  count$: Observable<number>;

  constructor(private counterService: CounterService, private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }


  ngOnInit(): void {
    this.counter$ = this.counterService.counter$;
  }

  //onIncrement() {
  //  //this.counter++;
  //}

  //onDecrement() {
  //  //this.counter--;
  //}

  //onReset() {
  //  //this.counter = 0;
  //}

}

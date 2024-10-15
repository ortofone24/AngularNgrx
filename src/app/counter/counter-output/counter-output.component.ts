import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectCount } from '../state/counter/counter.selector';

import * as CounterSelectors from '../state/counter/counter.selector';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  @Input() counter!: number;
  //counter$!: Observable<number>;
  count$: Observable<number>;
  counterSubscription!: Subscription;
  counterTwo!: number;
  
  constructor(private counterService: CounterService, private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  //constructor(private counterService: CounterService, private store: Store<AppState>) {
  //  this.count$ = this.store.select(selectCount);
  //}


  ngOnInit(): void {
    //this.counter$ = this.counterService.counter$;
    this.counterSubscription = this.store.select(CounterSelectors.getCounter)
      .subscribe((counter) => {

        console.log('Counter observable Call')

        this.counterTwo = counter;
      })
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}

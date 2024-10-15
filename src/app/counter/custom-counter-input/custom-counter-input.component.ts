
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { changeChannelName, customIncrement } from '../state/counter/counter.actions';
import * as CounterSelectors from '../state/counter/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  channelName!: string;
  channelName$!: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.channelName$ = this.store.select(CounterSelectors.selectChannelName);
  }


  ngOnInit(): void {
    this.store.select(CounterSelectors.getChannelName).subscribe(channelName => {
      console.log("Channel Name Observable Called");
      this.channelName = channelName
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));

    console.log(this.value);
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}

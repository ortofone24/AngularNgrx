
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { customIncrement } from '../state/counter/counter.actions';


@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));

    console.log(this.value);
  }
}

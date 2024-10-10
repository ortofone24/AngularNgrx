import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {

  }

  onIncrement() {
    /*this.increment.emit();*/
    this.counterService.increment();
  }

  onDecrement() {
    /*this.decrement.emit();*/
    this.counterService.decrement();
  }

  onReset() {
    /*this.reset.emit();*/
    this.counterService.reset();
  }

}

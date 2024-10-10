import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    //this.counter$ = this.counterService.counter$;
  }
}

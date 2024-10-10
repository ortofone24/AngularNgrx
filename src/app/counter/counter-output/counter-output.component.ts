import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  @Input() counter!: number;

  ngOnInit(): void {

  }
}

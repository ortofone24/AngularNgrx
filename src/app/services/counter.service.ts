import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public counter$: Observable<number> = this.counterSubject.asObservable();

  constructor() { }

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  reset(): void {
    this.counterSubject.next(0);
  }


}

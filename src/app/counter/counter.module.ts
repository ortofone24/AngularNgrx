import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { StoreModule, provideState, provideStore } from "@ngrx/store";
import { counterReducer } from "./state/counter/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter/counter.selector";


const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
   /* StoreModule.forFeature('counter', counterReducer)*/
  ],
  providers: [
    provideState(COUNTER_STATE_NAME, counterReducer),
  ]
}) 
export class CounterModule {

}


//provideState(
//  { name: 'counterState', reducer: counterReducer }
//),

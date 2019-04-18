import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 1;
  
  public incrementCarne() {
    this.currentCount++;
  }
  public removeCarne() {
    this.currentCount--;
  }
}

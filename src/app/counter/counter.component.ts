import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  public currentAlface = 0;
  public currentBacon = 0;
  public currentHamburguerCarne = 0;
  public currentOvo = 0;
  public currentQueijo = 0;
  // public currentCount = 1;
  
  // public incrementCarne() {
  //   this.currentCount++;
  // }
  // public removeCarne() {
  //   this.currentCount--;
  // }

  public incrementAlface(){
    this.currentAlface++;
  }
  public decrementAlface(){
    this.currentAlface--;
  }
  //
  public incrementBacon(){
    this.currentBacon++;
  }
  public decrementBacon(){
    this.currentBacon--;
  }

  public incrementHamburguerCarne(){
    this.currentHamburguerCarne++;
  }
  public decrementHamburguerCarne(){
    this.currentHamburguerCarne--;
  }

  public incrementOvo(){
    this.currentOvo++;
  }
  public decrementOvo(){
    this.currentOvo--;
  }

  public incrementQueijo(){
    this.currentQueijo++;
  }
  public decrementQueijo(){
    this.currentQueijo--;
  }

  ngOnInit(){

    

  }

}

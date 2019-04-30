import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {

  public currentAlface = 1;
  public currentBacon = 1;
  public currentHamburguerCarne = 1;
  public currentOvo = 1;
  public currentQueijo = 1;

  // public currentCount = 1;
  
  // public incrementCarne() {
  //   this.currentCount++;
  // }
  // public removeCarne() {
  //   this.currentCount--;
  // }

  public incrementAlface(){
    this.currentAlface++;
    if (this.currentAlface == 3){
      $("#btnAddAlface").attr("disabled", true)
    }
  }
  public decrementAlface(){
    this.currentAlface--;
    if (this.currentAlface == 0){
      $("#btnDelAlface").attr("disabled", true)
    } 
  }
  //
  public incrementBacon(){
    this.currentBacon++;
    if(this.currentBacon == 3){
      $("#btnAddBacon").attr("disabled", true)
    }
  }
  
  public decrementBacon(){
    this.currentBacon--;
    if(this.currentBacon == 0){
      $("#btnDelBacon").attr("disabled", true)
    }
  }

  public incrementHamburguerCarne(){
    this.currentHamburguerCarne++;
    if(this.currentHamburguerCarne == 4){
      $("#btnAddHamburguerCarne").attr("disabled", true)
    }
  }
  public decrementHamburguerCarne(){
    this.currentHamburguerCarne--;
    if(this.currentHamburguerCarne == 0){
      $("#btnDelHamburguerCarne").attr("disabled", true)
    }
  }

  public incrementOvo(){
    this.currentOvo++;
    if(this.currentOvo == 4){
      $("#btnAddOvo").attr("disabled", true)
    }
  }
  public decrementOvo(){
    this.currentOvo--;
    if(this.currentOvo == 0){
      $("#btnDelOvo").attr("disabled", true)
    }
  }

  public incrementQueijo(){
    this.currentQueijo++;
    if(this.currentQueijo == 4){
      $("#btnAddQueijo").attr("disabled", true)
    }
  }
  public decrementQueijo(){
    this.currentQueijo--;
    if(this.currentQueijo == 0){
      $("#btnDelQueijo").attr("disabled", true)
    }
  }


  ngOnInit(){

    $("#sendOrder").click(function(e){
      alert("Pedido Enviado, em caso de cancelamento ligue: (19)0000-0000 !")
    });

  }

}

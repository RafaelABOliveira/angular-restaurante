import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-component', 
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
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
    if(this.currentHamburguerCarne == 6){
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
    if(this.currentQueijo == 6){
      $("#btnAddQueijo").attr("disabled", true)
    } 
  }

  public decrementQueijo(){
    this.currentQueijo--;
    if(this.currentQueijo == 0){
      $("#btnDelQueijo").attr("disabled", true)
    }
  }


  public calcValor(){
    //promoção "Light"
    if(this.currentAlface >= 1 && this.currentBacon == 0){
      return (((this.currentAlface * 0.4) + (this.currentBacon * 2) + (this.currentHamburguerCarne * 3) + (this.currentOvo * 0.8) + (this.currentQueijo * 1.5)) * 90 / 100).toFixed(2);

    //na promoção de "Muita Carne" podemos procurar os múltiplos de 3 e 6 com resto da divisão para Carne e subtrair as porções para fazer a promoção 
    } else if (this.currentHamburguerCarne % 3 == 0 && this.currentHamburguerCarne % 6 != 0){
      return ((this.currentAlface * 0.4) + ((this.currentHamburguerCarne - 1) * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + (this.currentQueijo * 1.5)).toFixed(2);

    } else if (this.currentHamburguerCarne % 6 == 0){
      return ((this.currentAlface * 0.4) + ((this.currentHamburguerCarne - 2) * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + (this.currentQueijo * 1.5)).toFixed(2);

    //promoção de "Muito Queijo" podemos usar a mesma lógica de carne
    } else if (this.currentQueijo % 3 == 0 && this.currentQueijo % 6 != 0){
      return ((this.currentAlface * 0.4) + (this.currentHamburguerCarne * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + ((this.currentQueijo - 1) * 1.5)).toFixed(2);

    } else if (this.currentQueijo % 6 == 0){
      return ((this.currentAlface * 0.4) + (this.currentHamburguerCarne * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + ((this.currentQueijo - 2)* 1.5)).toFixed(2);

    //valor padrão sem promoção 
    } else {
      return ((this.currentAlface * 0.4) + (this.currentHamburguerCarne * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + (this.currentQueijo * 1.5)).toFixed(2);
    }
  }

  //((this.currentAlface * 0.4) + (this.currentHamburguerCarne * 3) + (this.currentBacon * 2) + (this.currentOvo * 0.8) + (this.currentQueijo * 1.5)).toFixed(2);

  ngOnInit(){

    $("#btnReload").click(function(e){
      location.reload(e);
    })

    $("#sendOrder").click(function(e){
      alert("Pedido Enviado, em caso de cancelamento ligue: (19)0000-0000 !");
    });

  }

}

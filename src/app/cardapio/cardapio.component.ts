import { Component, OnInit } from '@angular/core/';
import { Itens } from '../shared/itens.model'
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {

  hamburguers: Itens[];
  ingredientes: Itens[];

  constructor(private service: CardapioService){ }

  ngOnInit() {

    this.service.listBurguers()
    .subscribe(data => this.hamburguers = data);

    this.service.listIngredients()
    .subscribe(data => this.ingredientes = data);



    // MÉTODO SEM REQUISIÇÃO HTTP
    // var cardapio = $("#cardapio");
    // var estados = $("tr");

    // $(document).ready(function () {
    //   estados = [
    //     {
    //       "Lanche": "X-Bacon",
    //       "Ingredientes": "Bacon, hambúrguer de carne e queijo"
    //     },
    //     {
    //       "Lanche": "X-Burger",
    //       "Ingredientes": "Hambúrguer de carne e queijo"
    //     },
    //     {
    //       "Lanche": "X-Egg",
    //       "Ingredientes": "Ovo, hambúrguer de carne e queijo"
    //     },
    //     {
    //       "Lanche": "X-Egg Bacon",
    //       "Ingredientes": "Ovo, bacon, hambúrguer de carne e queijo"
    //     }
    //   ];
    //   $(estados).each(function (i) {
    //     //lista os estados
    //     let opt = "<tr><td>" + this.Lanche + "</td> <td>" + this.Ingredientes + "</td></tr>";

    //     $(cardapio).append(opt);
    //   });
    // });

    // //ingredientes****************************************************************************************

    // var ingredientes = $("#ingredientes");
    // var ingrediente = $("tr");

    // $(document).ready(function () {
    //   ingrediente = [
    //     {
    //       "Ingrediente": "Alface",
    //       "Preco": "R$ 0.40"
    //     },
    //     {
    //       "Ingrediente": "Bacon",
    //       "Preco": "R$ 2,00"
    //     },
    //     {
    //       "Ingrediente": "Hambúrguer de carne",
    //       "Preco": "R$ 3,00"
    //     },
    //     {
    //       "Ingrediente": "Ovo",
    //       "Preco": "R$ 0,80"
    //     },
    //     {
    //       "Ingrediente": "Queijo",
    //       "Preco": "R$ 1,50"
    //     }
    //   ];

    //   $(ingrediente).each(function (i) {
    //     //lista os estados
    //     let opt = "<tr><td>" + this.Ingrediente + "</td> <td>" + this.Preco + "</td></tr>";

    //     $(ingredientes).append(opt);
    //   });
    // });

  }
}

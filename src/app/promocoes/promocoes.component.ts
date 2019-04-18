import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var promocoes = $("#promocoes");
    var prom = $("tr");

    $(document).ready(function () {
      prom = [
        {
          "Promocao": "Light",
          "Cond": "Se o lanche tem alface e não tem bacon, ganha 10% de desconto."
        },
        {
          "Promocao": "Muita carne",
          "Cond": "A cada 3 porções de carne o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante..."
        },
        {
          "Promocao": "Muito queijo",
          "Cond": "A cada 3 porções de queijo o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante..."
        },
        {
          "Promocao": "Inflação",
          "Cond": "Os valores dos ingredientes são alterados com frequência e não gostaríamos que isso influenciasse nos testes automatizados."
        }
      ];
      $(prom).each(function (i) {
        //lista os estados
        let opt = "<tr><td>" + this.Promocao + "</td> <td>" + this.Cond + "</td></tr>";

        $(promocoes).append(opt);
      });
    });
  }

}

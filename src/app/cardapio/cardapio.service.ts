import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itens } from '../shared/itens.model';
import { tap } from 'rxjs/operators'

@Injectable()
export class CardapioService {

  private readonly APItoBurguer = "http://localhost:3000/itens?categoria=lanche";
  private readonly APItoIngredientes = "http://localhost:3000/itens?categoria=ingrediente";

  constructor(private http: HttpClient) { }

  listBurguers(){
    return this.http.get<Itens[]>(this.APItoBurguer)
    .pipe(
      tap(console.log) //Array de informações
    )
  }

  listIngredients(){
    return this.http.get(this.APItoIngredientes)
    .pipe(
      tap(console.log)
    )
  }

}

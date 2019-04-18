import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Itens } from './shared/itens.model'

import 'rxjs/add/operator/toPromise'
import { JsonPipe } from '@angular/common';

@Injectable()
export class ItensService {

    
    constructor(private http: HttpClient){}
    
    public getItens(): Promise<Itens[]> {
        return this.http.get(`http://localhost:3000/item?categoria==lanche`)
            .toPromise()
            .then()
    }

    public getDescricaoIten(descricao: string) : Promise<Itens[]> {
        return this.http.get(`http://localhost:3000/item?descricao=${descricao}`)
            .toPromise()
            .then();
        }
    }
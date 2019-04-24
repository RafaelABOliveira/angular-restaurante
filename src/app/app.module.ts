import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { CardapioService } from './cardapio/cardapio.service'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    CardapioComponent,
    PromocoesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'cardapio', component: CardapioComponent},
      { path: 'promocoes', component: PromocoesComponent}
    ])
  ],
  providers: [
    CardapioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

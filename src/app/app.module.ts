import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LojaVirtualComponent } from './componentes/loja-virtual/loja-virtual.component';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { ComprasComponent } from './componentes/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaVirtualComponent,
    ProdutosComponent,
    CarrinhoComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

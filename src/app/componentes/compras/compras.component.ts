import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto.interface';
import { ITransacao } from 'src/app/interfaces/transacao.interface';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { TransacaoService } from 'src/app/servicos/transacao';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  produtosDoCarrinho: IProduto[] = [];
  transacoes: ITransacao[] = [];

  constructor(private carrinhoService: CarrinhoService, private transacaoService: TransacaoService){

  }

  ngOnInit(){
    this.produtosDoCarrinho = this.carrinhoService.getProdutos();
    this.transacoes = this.transacaoService.getTransacoes();
  }

  getTransacoes(): ITransacao[]{
    return this.transacoes;
  }
}

import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto.interface';
import { Transacao } from 'src/app/modelos/transacao';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { TransacaoService } from 'src/app/servicos/transacao';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  produtosSelecionados: IProduto[] = [];
  compraFinalizada = false;

  constructor(private carrinhoService: CarrinhoService, private transacaoService: TransacaoService){

  }

  ngOnInit(){
    this.produtosSelecionados = this.carrinhoService.getProdutos();
  }

  calcularTotal(): number{
    return this.carrinhoService.getTotal();
  }

  finalizarCompra(): void{
    let total = this.calcularTotal();
    let data = new Date();
    let transacao = new Transacao(this.produtosSelecionados, total, data);
    this.transacaoService.adicionarTransacao(transacao);
    this.compraFinalizada = true;
  }

}

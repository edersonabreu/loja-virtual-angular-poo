import { Injectable } from '@angular/core';
import { CarrinhoDeCompras } from '../modelos/carrinhoDeCompras';
import { IProduto } from '../interfaces/produto.interface';

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService{
    private carrinho: CarrinhoDeCompras = new CarrinhoDeCompras();
    constructor(){}

    adicionarProduto(produto: IProduto):void {
        this.carrinho.adicionarProduto(produto);
    }

    getProdutos(): IProduto[]{
        return this.carrinho.getProdutos();
    }

    getTotal(): number{
        return this.carrinho.calcularTotal();
    }
}
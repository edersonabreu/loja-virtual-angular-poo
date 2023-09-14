import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto.interface';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { Produto } from 'src/app/modelos/produto';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  exibirCarrinho = false;

  usuario!: IUsuario;

  produtos: IProduto[] = [
    new Produto(1, 'Fritadeira Elétrica sem Óleo/Air Fryer Mondial - New Pratic AF-31 Preta 3,5L com Timer', 'A nova fritadeira elétrica sem Óleo/Air Fryer New Pratic AF-31 da Mondial chega para completar seus momentos na cozinha. Na cor preto é um eletrodoméstico indispensável para manter a praticidade no preparo das receitas do dia a dia.', 'https://a-static.mlcdn.com.br/800x560/fritadeira-eletrica-sem-oleo-air-fryer-mondial-new-pratic-af-31-preta-35l-com-timer/magazineluiza/236479400/fed9f79e3ae2933812f99b8a3527c92d.jpg', 325),
    new Produto(2, 'iPhone 11 Apple 64GB Preto 6,1” 12MP iOS', 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla. Tire fotos incríveis com pouca luz usando o modo Noite. Veja cores fiéis em fotos, vídeos e jogos na tela Liquid Retina de 6,1 polegadas***. ', 'https://a-static.mlcdn.com.br/800x560/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg', 2890),
    new Produto(3, 'Cadeira Gamer Otello Preto e Vermelho', 'Para você que é fanático por games, além de ter equipamentos eletrônicos que elevem o seu nível de jogabilidade, precisa de equipamentos que melhorem a ergonomia nos momentos dos jogos para não ser um momento desconfortável. ', 'https://a-static.mlcdn.com.br/800x560/cadeira-gamer-otello-preto-e-vermelho/magazineluiza/237019000/2063a3993d56a8644ae286e745e23f95.jpg', 370),
    new Produto(4, 'Guarda-roupa Casal com Espelho 4 Portas 6 Gavetas Araplac Atraente Sofia', 'A Araplac apresenta o Guarda-roupa Linea 4 portas com espelho, a fim de deixar seu quarto mais bonito e ainda auxiliar na organização do espaço. Sua estrutura compõe 6 gavetas, mais 6 prateleiras internas - todos com espaços amplos para acomodar seus pertences.', 'https://a-static.mlcdn.com.br/800x560/guarda-roupa-casal-com-espelho-4-portas-6-gavetas-araplac-atraente-sofia/magazineluiza/214802100/190191e6caf9f4ed05518a3238c32087.jpg', 980)
  ];

  constructor(private carrinhoService: CarrinhoService, private usuarioService: UsuarioService){

  }

  ngOnInit(){
    this.usuario = this.usuarioService.getUsuario();
  }

  adicionarAoCarrinho(produto: IProduto): void{
    this.carrinhoService.adicionarProduto(produto);
  }

  abrirCarrinho(): void {
    this.exibirCarrinho = true;
  }
}

import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-loja-virtual',
  templateUrl: './loja-virtual.component.html',
  styleUrls: ['./loja-virtual.component.css']
})
export class LojaVirtualComponent {
  showProdutosComponent = false;
  nome!: string;

  constructor(private usuarioService: UsuarioService){

  }

  entrarLoja(): void{
    this.showProdutosComponent = true;
    this.usuarioService.adicionarUsuario(new Cliente(1, this.nome));
    console.log(this.usuarioService.getUsuario());
  }
}

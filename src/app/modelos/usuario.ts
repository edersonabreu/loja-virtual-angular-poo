import { IUsuario } from "../interfaces/usuario.interface";

export abstract class Usuario implements IUsuario{
    constructor(public id: number, public nome: string){

    }

    getNome(): string {
        return this.nome;
    }
}
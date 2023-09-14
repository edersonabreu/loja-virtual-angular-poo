import { IProduto } from "../interfaces/produto.interface";
import { ITransacao } from "../interfaces/transacao.interface";

export class Transacao implements ITransacao{
    constructor(public produtos: IProduto[], public total: number, public data: Date){}
}
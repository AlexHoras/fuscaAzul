export class Cadastro{
    codigo: number
    descricao: string
    quantidade: number
    minima: number
    capacidade: number
    constructor(codigo:number, descricao:string, quantidade:number, capacidade:number, minima:number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.minima = minima;
        this.capacidade = capacidade;

    }

}
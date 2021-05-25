export class Estoque{
    codigo: number;
    descricao: string;
    quantidade: number;
    capacidade: number;
    minimo: number;

    constructor(codigo: number, descricao:string, quantidade:number, capacidade: number, minimo: number){
        this.codigo = codigo
        this.descricao = descricao
        this.quantidade = quantidade
        this.capacidade = capacidade
        this.minimo = minimo        
    }
}
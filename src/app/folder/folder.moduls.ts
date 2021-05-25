export class Estoque{   
    cod: number;
    descricao: string;
    tipo: string;
    preco: number;
    qtde: number;
    nomeLoja: string

    constructor(cod:number, descricao:string, tipo: string, preco: number, qtde: number, nomeLoja: string){       
        this.cod = cod
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
        this.qtde = qtde
        this.nomeLoja = nomeLoja
    }
}
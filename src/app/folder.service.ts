import { Injectable } from '@angular/core';
import { Estoque } from './folder/folder.moduls';


@Injectable({
  providedIn: 'root'
})
export class FolderService {
private produtos: Estoque[]

  constructor() {
    this.produtos = [
      new Estoque(1,"Volante","Automotiva",250, 10,'Loja 1'),
      new Estoque(2,"Cabeçote","Automotiva",300, 50,'Loja 2'),
      new Estoque(3,"Oleo de motor","Automotiva",200, 350,'Loja 3'),
      new Estoque(4,"Parafusadeira","Ferramentas",100, 320,'Loja 2'),
      new Estoque(5,"Martelo","Ferramentas",20, 30,'Loja 3'),
      new Estoque(6,"Telha","Aço",100, 320,'Loja 3')
    ]
   }
   getEstoque(){
     return this.produtos
   }

   addProduto(cod:number, descricao:string, tipo: string, preco: number, qtde: number, nomeLoja: string){
    this.produtos.push(new Estoque(cod,descricao,tipo,preco,qtde,nomeLoja))
   }
}

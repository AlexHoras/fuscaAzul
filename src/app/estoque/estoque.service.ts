import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Estoque } from './visualizar/visualizar.models';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private estoque : Estoque[]
  salva: string = "";
  constructor() {
    this.estoque = [
      new Estoque(123, 'disco', 15,50, 10),
      new Estoque(124, 'camara', 20,150, 30),
      new Estoque(1535, 'farol', 100, 200, 50)      
    ]
    
    
  }
  getEstoque(){
    return this.estoque
  }

  getPreoduto(i: number){
    return this.estoque[i]
  }

  adicionarQuantidade(i:number, quantidade:number ){
    this.estoque[i].quantidade += quantidade    
  }
  removeQuantidade(i:number, quantidade:number ){
    this.estoque[i].quantidade -= quantidade    
  }
  addProduto(codigo: number, descricao:string, quantidade:number, capacidade: number, minima: number){
    const salva = this.estoque.push(new Estoque(codigo,descricao,quantidade,capacidade,minima))
    
    const tarefasJSON = JSON.stringify(this.getEstoque());
    localStorage.setItem('pecas', tarefasJSON);    

  }

  salvas(){
    const tarefas: any = localStorage.getItem('pecas');   
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas){
      this.getPreoduto(tarefa);      
    }
  }

  Edit(i : number, quantidade:number){
    this.estoque[i].quantidade = quantidade   

  }
}

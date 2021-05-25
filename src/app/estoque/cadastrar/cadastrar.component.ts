import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EstoqueService } from '../estoque.service';
import { Cadastro } from './cadastro.models';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  
  
  constructor(private estoqueService:EstoqueService) {
    
  }

  ngOnInit(): void {
     
  }
  onSubmit(dados : any){
    let codigo = dados.value.codigo; 
    let descricao = dados.value.descricao;
    let quatidade = dados.value.quantidade;
    let capacidade = dados.value.capacidade;
    let minima = dados.value.minima;    
    
    this.estoqueService.addProduto(codigo, descricao, quatidade, capacidade, minima)    
  }

   
}




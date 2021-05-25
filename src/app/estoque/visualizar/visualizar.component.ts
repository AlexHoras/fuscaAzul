import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EstoqueService } from '../estoque.service';
import { Estoque } from './visualizar.models';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  estoque : Estoque[]


  constructor(private estoqueService:EstoqueService) {
    this.estoque = estoqueService.getEstoque();
    
  }

  ngOnInit(): void {
   
   
  }

}

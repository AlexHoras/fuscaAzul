import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstoqueService } from '../estoque.service';
import { Estoque } from '../visualizar/visualizar.models';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  id: number = 0;
  inscricao? : Subscription;
  estoque: any;  
  quantidade: number = 0

  constructor( 
    private estoqueService: EstoqueService,
    private route: ActivatedRoute,
    private router: Router
    ) {   }

  ngOnInit(): void {  
    this.inscricao = this.route.params.subscribe(
      
      (params) => {
        this.id = params['id']
        this.estoque = this.estoqueService.getPreoduto(this.id);
        if(this.estoque == null){
           this.router.navigate(['']); 
        }
      }
    )
  }

  adicionar(dados:any){
    let quantidade = Number(dados.value.quantidade)   
    this.estoqueService.adicionarQuantidade(this.id, quantidade)
  }
  remover(dados:any){
    let quantidade = Number(dados.value.quantidade)     
    this.estoqueService.removeQuantidade(this.id, quantidade)
  }

}

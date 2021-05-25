import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from '../folder.service';
import { Estoque } from './folder.moduls';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  produtos: Estoque[]
  textoBuscar = '';


  constructor(private activatedRoute: ActivatedRoute, private folderServise: FolderService  ) {
    this.produtos = folderServise.getEstoque();
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  buscar( event){
    this.textoBuscar = event.detail.value;
  }

}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Estoque', url: '/estoques', icon: 'clipboard' },
    { title: 'Cadastro', url: '/cadastros', icon: 'add' },
    { title: 'Saída', url: '/saidas', icon: 'paper-plane' },
  ];
  //ublic labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

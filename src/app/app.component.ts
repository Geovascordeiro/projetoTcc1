import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clicou = false;
  noticia = '';

  enviarRequisicao(): void {
    if (this.noticia == '') {
      alert('Campo vazio, preencha !')
    } else {
      this.clicou = true;
    }
  }

  teste(): void {
    this.clicou = false;
  }
}

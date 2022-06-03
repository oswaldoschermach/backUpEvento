import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Titulo',
  templateUrl: './Titulo.component.html',
  styleUrls: ['./Titulo.component.css']
})
export class TituloComponent implements OnInit {

  //para criar uma propiedade de imput na tag do component
  @Input() titulo: string = '';
  @Input() iconClass: string = '';
  @Input() subtitulo: string = '';
  @Input() botaoListar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

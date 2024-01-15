import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem() {
    console.log(this.valorItem)
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }
}

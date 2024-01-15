import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item; //comunicação de pai para filho
  @Output() emitindoItemParaEditar = new EventEmitter(); //comunicação de filho para pai

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(){ }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }
}

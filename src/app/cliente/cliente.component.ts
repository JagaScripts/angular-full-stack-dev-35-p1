import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from './cliente.modelo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() clientes: Cliente[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

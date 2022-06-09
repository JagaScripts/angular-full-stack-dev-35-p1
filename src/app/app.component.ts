import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './cliente/cliente.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-full-stack-dev-u35';
  formReactive: FormGroup;
  clientes: Cliente[] = [];
  cliente: Cliente = {
    nombre: '',
    direccion: '',
    cif: '',
    grupo: 1
  };

  constructor(private formBuilder: FormBuilder){
    this.formReactive = this.formBuilder.group({
      nombre: ['',Validators.required],
      direccion: ['', Validators.required],
      cif: ['', Validators.required],
      grupo: ['', Validators.required],
    });
  }

  agregarCliente() {

    if(this.formReactive.valid){

      let auxCliente = new Cliente(this.cliente.nombre,this.cliente.cif,this.cliente.direccion,this.cliente.grupo);

      this.clientes.push(auxCliente);

      this.onResetForm();

    }

  }

  onResetForm() {
    this.formReactive.reset();
  }

  getValue(value: string) {

    // console.log(value + " valor");
    // console.log(this.formReactive.get(value) + " reactive");

    return this.formReactive.get(value); //retorna todo el control
  }

}

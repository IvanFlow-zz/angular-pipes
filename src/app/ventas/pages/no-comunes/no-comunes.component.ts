import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Ivan Flores';
  genero:string  = 'masculino';
  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'José','Sergio', 'Laura'];
  clientesMapa = {
    '=0' : 'no tenemos ninún cliente',
    '=1' : 'tenemos 1 cliente',
    'other' : 'tenemos # clientes'
  }

  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuPipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ];

  //AsyncPipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
  

}

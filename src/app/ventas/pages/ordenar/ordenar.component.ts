import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  mayus: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    { 
        nombre: 'Superman',
        vuela: true,
        color: Color.azul
    },
    { 
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
  },
  { 
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
},
{ 
  nombre: 'Batman',
  vuela: false,
  color: Color.negro
},
{ 
  nombre: 'Linterna Verde',
  vuela: true,
  color: Color.verde
}
  ];
  heroes2 = [...this.heroes];
  
  toggleMayus(){
    this.mayus = !this.mayus;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }

}

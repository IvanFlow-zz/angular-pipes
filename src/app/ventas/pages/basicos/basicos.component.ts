import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreTitle: string = 'fernando hErRera';
  fecha: Date = new Date();
  constructor() { }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgImporterModule } from '../prime-ng-importer/prime-ng-importer.module';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgImporterModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

// Modules
const modules = [
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {NgxPaginationModule} from 'ngx-pagination'; 

// Modules
const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgxPaginationModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
  ],
  declarations: [],

})
export class SharedModule { }
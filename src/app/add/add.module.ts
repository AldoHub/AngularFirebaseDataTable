    
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';


//import shared Module
import { SharedModule } from "../shared";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
   AddRoutingModule,
  ],
  declarations: [AddComponent]
})
export class AddModule { }
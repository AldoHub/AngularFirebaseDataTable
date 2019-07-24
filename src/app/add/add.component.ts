import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";
import {RealtimeService} from "../realtime.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private realtimeService: RealtimeService) { }

  public periodicElements = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('',  Validators.required),
    symbol: new FormControl('',  Validators.required),
  });

  addElement(formdata: FormData){
    console.log(formdata);
    this.realtimeService.addElement(formdata);
  }

  ngOnInit() {
  }

}

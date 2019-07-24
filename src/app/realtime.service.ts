import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  elementsList : AngularFireList<any>;


  constructor(private angularFireDB: AngularFireDatabase) { 
    this.getElements();
  }

  getElements(){
    this.elementsList = this.angularFireDB.list("/Elements");
    return this.elementsList;
  }


  addElement(element: object) {
    this.elementsList.push({
      name: element["name"],
      weight: element["weight"],
      symbol: element["symbol"]
    }); 
  }


  getPaginationElements(){
    return this.angularFireDB.list("/Elements", ref => ref.orderByChild("name")).snapshotChanges();
  }


}

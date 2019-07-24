import {ChangeDetectionStrategy, Component, OnInit,  ViewChild } from '@angular/core';
import { RealtimeService } from "../realtime.service";

import {MatPaginator, MatTableDataSource} from '@angular/material';

//excel service
import { ExcelService } from "../excel.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit{

  
  elements: any;
  dataSource = new MatTableDataSource(this.elements);
  displayedColumns: string[] = ['name', 'weight', 'symbol'];


  paginationElements: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private realtimeService: RealtimeService, private excelService: ExcelService) { }


  toExcel: any[];


  getExcelSheet(){
    console.log("downloading excel");
    this.excelService.generateExcel("Elements", ["Name", "Weight", "Symbol"] , this.toExcel)
   
  }





  ngOnInit() {
    this.realtimeService.elementsList.snapshotChanges().subscribe( snapshot => {
      this.elements = [];

      this.toExcel = [];
      
      snapshot.map(elem => {
        this.elements.push({
          id: elem.payload.key,
          data: elem.payload.val()
        });
       
        this.toExcel.push(
         [elem.payload.val().name, elem.payload.val().weight, elem.payload.val().symbol]  
        )

        this.dataSource= new MatTableDataSource<any>(this.elements);
        this.dataSource.paginator = this.paginator;
      })
        
    }) 

   

    this.realtimeService.getPaginationElements().subscribe( res => {
     this.paginationElements = [];
      res.map(elem => {
        this.paginationElements.push({
          id: elem.payload.key,
          data: elem.payload.val()
        });
      
      })
    })


  }
  
}



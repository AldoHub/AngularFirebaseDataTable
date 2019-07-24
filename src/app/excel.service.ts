import { Injectable } from '@angular/core';

import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generateExcel(title: string, headers: string[], toExcel: any[]) {

    //define the title
    const WorkBookTitle = title;
    //define the headers
    const TableHeaders = headers;
    //define the data to use
    const data = toExcel;

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(WorkBookTitle);

    //blank row to separate
    worksheet.addRow([]);
    
    //add the header row
    let headerRow = worksheet.addRow(TableHeaders);
    //set the style for each header cell
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' },
        bgColor: { argb: 'DDDDDDDD' }
      }
     // cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

    
    //add the data
    data.forEach(d => {
      let row = worksheet.addRow(d);
    });

    worksheet.addRow([]);
    let footerRow = worksheet.addRow(['Company Portal, All Rights Reserved']);
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);


    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'PortalCompany.xlsx');
    })


  }

}

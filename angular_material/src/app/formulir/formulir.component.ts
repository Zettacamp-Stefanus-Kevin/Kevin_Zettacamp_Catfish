import { Component, OnInit, Inject } from '@angular/core';
import { FormService } from '../service/form.service';
import { Form } from '../service/form';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { TranslateService } from "@ngx-translate/core";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-formulir',
  templateUrl: './formulir.component.html',
  styleUrls: ['./formulir.component.css']
})
export class FormulirComponent implements OnInit {

  selectedLang = 'en';


  displayedColumns: string[] = ['id', 'name', 'DOB', 'gender'];
  Forms: any = []
  dataSource = new MatTableDataSource(this.Forms);

  constructor(private formService: FormService,
    private dialog: MatDialog,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.formService.getdatas().subscribe(
      dat => {
        console.log(dat)
        this.dataSource.data = dat;
      })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, 
      {width: '90%', height: '90%'}); {
       
      dialogRef.afterClosed().subscribe(result => {
         
        console.log(result);

        if (!result) return;

        this.formService.addData(result);

        Swal.fire({
          icon: 'success',
          title: this.translate.instant("MyForm.Success")
        })
      });

    };

  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }


}




import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { CardService } from '../model/card.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  selectedLang = 'en';

  cardForm = new FormGroup({
    nama: new FormControl(null),
    img: new FormControl(null, Validators.required),
    caption: new FormControl(null)
  });

  constructor(private service: CardService,
    private router: Router,
    private translate: TranslateService) { }


  ngOnInit(): void {
  }

  onSubmit(data: any) {
    if (this.cardForm.valid) {
      this.service.addCard(data);
      this.cardForm.reset();
      this.router.navigate(['card'])

      Swal.fire({
        icon: 'success',
        text: this.translate.instant("card.Data Completed"),
        title: this.translate.instant("card.Success")
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: this.translate.instant("card.Data not Completed"),
        title: this.translate.instant("card.Error")
      });
    }

  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}

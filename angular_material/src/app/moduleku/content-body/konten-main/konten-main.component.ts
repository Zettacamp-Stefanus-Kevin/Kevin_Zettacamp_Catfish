import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-konten-main',
  templateUrl: './konten-main.component.html',
  styleUrls: ['./konten-main.component.css']
})
export class KontenMainComponent implements OnInit {

 keterangan = ''

  @Input() input: any;
  
  
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('test ngOnInit - input');
  }

  ngOnChanges(): void{
    console.log('test ngOnChanges - input');
    
  }

  ngAfterViewInit():void{
    console.log('test ngAfterViewInit - input');
  }

  ngDoCheck():void{
    console.log('test ngDoCheck - input');
    this.keterangan = 'POWER'
  }

  // ngAfterContentInit():void{
  //   console.log('test ngAfterContentInit - input');
  // }

  // ngAfterContentChecked(): void{
  //   console.log('test ngAfterContentChecked - input');
  // }

  

  // ngAfterViewChecked():void{
  //   console.log('test ngAfterViewChecked - input');
  // }

  // ngOnDestroy():void{
  //   console.log('test ngOnDestroy - input');
  // }

}

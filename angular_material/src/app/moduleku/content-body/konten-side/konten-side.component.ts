import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-konten-side',
  templateUrl: './konten-side.component.html',
  styleUrls: ['./konten-side.component.css']
})
export class KontenSideComponent implements OnInit {


  btn='';
  @Output() newItemEvent = new EventEmitter<any>();

  @ViewChild('skill') skill!: ElementRef<any>;

  addNewItem(img: HTMLInputElement, hero: HTMLInputElement) {
    this.newItemEvent.emit({
      img: img.value,
      hero: hero.value,
      skill: this.skill.nativeElement.value
    });

  }


  constructor() { 
    setTimeout(() => {
      console.log('sudah 3 detik');
      }, 3000 )
  }

  ngOnInit(): void {
    console.log('test ngOnInit - output');
    
  }

  ngOnChanges(): void{
    console.log('test ngOnChanges - output');

    // setTimeout(() => {
    //   console.log('sudah 3 detik');
    //   }, 3000 )
    
  }

  ngDoCheck():void{
    console.log('test ngDoCheck - output');
    this.btn = 'ADD AGENT'
    setTimeout(() => {
      console.log('sudah 3 detik');
      }, 3000 )
  }

  ngAfterViewInit():void{
    console.log('test ngAfterViewInit - output');
  }

  // ngAfterContentInit():void{
  //   console.log('test ngAfterContentInit - output');
  // }

  // ngAfterContentChecked(): void{
  //   console.log('test ngAfterContentChecked - output');
  // }

  // ngAfterViewChecked():void{
  //   console.log('test ngAfterViewChecked - output');
  // }

  // ngOnDestroy():void{
  //   console.log('test ngOnDestroy - output');
  // }



}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();


  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }



constructor() { }

ngOnInit(): void {
}

}

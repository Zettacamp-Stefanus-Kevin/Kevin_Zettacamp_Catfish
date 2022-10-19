import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponen-main',
  templateUrl: './komponen-main.component.html',
  styleUrls: ['./komponen-main.component.css']
})
export class KomponenMainComponent implements OnInit {
  List = [
    {
      img: "https://cdn.alza.cz/Foto/or/articles/31903/img/valorant-agents-recenze1.jpg",
      title: "First",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolore eos nobis illo eveniet perferendis recusandae harum esse praesentium dolores beatae necessitatibus dicta sit, odit laboriosam! Vel, voluptatem eaque!"
    },
    {
      img: "https://shared.cdn.smp.schibsted.com/v2/images/10874821-a1c4-4fcf-8c35-a763f107bdf1?fit=crop&format=auto&h=1080&w=1920&s=79129755f1dacea511d2433f029a62faae03504e",
      title: "Second",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolore eos nobis illo eveniet perferendis recusandae harum esse praesentium dolores beatae necessitatibus dicta sit, odit laboriosam! Vel, voluptatem eaque!"
    },
    {
      img: "https://images.livemint.com/img/2020/06/03/1600x900/Valorant_1591218052835_1591218061187.jpg",
      title: "Third",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolore eos nobis illo eveniet perferendis recusandae harum esse praesentium dolores beatae necessitatibus dicta sit, odit laboriosam! Vel, voluptatem eaque!"
    },
    {
      img: "https://areajugones.sport.es/wp-content/uploads/2022/06/valorant-1080x609.jpg",
      title: "Fourth",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolore eos nobis illo eveniet perferendis recusandae harum esse praesentium dolores beatae necessitatibus dicta sit, odit laboriosam! Vel, voluptatem eaque!"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {

  inputs: any[] = [{ desk: '', skill: '' }]

  list = [{
    img: "https://valorantinfo.com/images/us/neon-id-card_valorant_large_art_10101.webp",
    hero: "Neon",
    skill: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  }, {
    img: "https://www.valorantinfo.gg/wp-content/uploads/2021/10/valorant-kayo-id-player-card.png",
    hero: "Kay/O",
    skill: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  }, {
    img: "https://www.valorantinfo.gg/wp-content/uploads/2021/10/valorant-reyna-id-player-card.jpg",
    hero: "Reyna",
    skill: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  }
  // , {
  //   img: "https://i.pinimg.com/originals/01/e3/4b/01e34b1f4831034930a52954cc2eb82c.png",
  //   hero: "Skye",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }, {
  //   img: "https://titles.trackercdn.com/valorant-api/playercards/5d56c40f-4798-9385-45bd-b9889854e3b5/largeart.png",
  //   hero: "Fade",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }, {
  //   img: "https://i.pinimg.com/originals/6e/c8/6b/6ec86bd6ce33d20ea0a7a094856e465c.png",
  //   hero: "Killjoy",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }, {
  //   img: "https://www.valorantinfo.gg/wp-content/uploads/2021/10/valorant-astra-id-player-card.png",
  //   hero: "Astra",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }, {
  //   img: "https://titles.trackercdn.com/valorant-api/playercards/c59b3a9b-467b-54b7-3e4d-a0a3107cbefe/largeart.png",
  //   hero: "Chamber",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }, {
  //   img: "https://www.valorantinfo.gg/wp-content/uploads/2021/10/valorant-yoru-id-player-card.jpg",
  //   hero: "Yoru",
  //   skill : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat, in exercitationem assumenda consequuntur atque non. Delectus neque ratione suscipit. Quaerat animi tempora aliquam nobis neque ullam nam recusandae aperiam.'
  // }
  ]

  addItem(newItem: any) {
    this.list.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
    console.log('test ngOnInit - parent');
  }

  ngOnChanges(): void{
    console.log('test ngOnChanges - parent');
  }

  ngAfterViewInit():void{
    console.log('test ngAfterViewInit - parent');
    
  }

}

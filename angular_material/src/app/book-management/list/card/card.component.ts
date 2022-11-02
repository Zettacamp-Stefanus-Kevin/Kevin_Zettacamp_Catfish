import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() posts : any

  constructor(private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
  }
  
  Edit() :void {
    this.router.navigate(["/form"], {
      queryParams: {postid : this.posts.id},
    });
  }

  onClick(){
    this.dataService.deletePost(this.posts.id).subscribe(()=>{})
  }

}

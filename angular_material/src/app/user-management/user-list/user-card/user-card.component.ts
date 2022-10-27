import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

@Input()user: any;

constructor(private router : Router) { 

}

  ngOnInit(): void {
  }

  Edit() :void {
    this.router.navigate(["/form"], {
      queryParams: {userid : this.user.id},
    });
  }

}

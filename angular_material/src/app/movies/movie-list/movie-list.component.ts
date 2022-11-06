import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/services/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

 
  list: Movie[]=[]

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.fetchData().subscribe(data =>{
      this.list = data
      console.log(this.list)
    })
  }


}

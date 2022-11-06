import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() selectMovie :any

  constructor( private route:ActivatedRoute,
    private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectMovie = this.moviesService.getMovieById(id);
    });  
  }

}

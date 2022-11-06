import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movie: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movie$ = this.movie.asObservable();

  selectMovie: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectMovie$ = this.selectMovie.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.fetchData().subscribe(data =>{
      this.movie.next(data)
      console.log(data)
    })
  }

  fetchData(){
    return this.httpClient.get<Movie[]>('../assets/data/movies.json')
  }

  getMovie(): Movie[] {
    return this.movie.getValue()
  }

  getMovieById(id: number): Movie {
    
    return this.getMovie().filter(item => item.id == id)[0];
  }

  
  updateSelectMovie(data:any){
    this.selectMovie.next(data)
  }


}

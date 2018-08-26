import { Component, OnInit } from '@angular/core';
import { TMBDatabaseService } from '../services/tMBDatabase.service';
import { Subscription } from '../../../node_modules/rxjs';
import { DBMovie } from '../models/dbMovie.model';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  movieList = [];
  episodeList = [];
  testText;
  private baseImagePath = 'http://image.tmdb.org/t/p/w185/';
  private movieListSub: Subscription;

  constructor(public tMBDatabaseService: TMBDatabaseService) { }

  ngOnInit() {
    this.movieList = ['Hello', 'My', 'Name', 'is', 'MovieList'];
    this.episodeList = ['Hello', 'My', 'Name', 'is', 'ShowList'];
    this.tMBDatabaseService.getPopularMovies();
    this.movieListSub = this.tMBDatabaseService.getMovieUpdateListener()
      .subscribe((movieListFromAPI: DBMovie[]) => {
        this.movieList = movieListFromAPI;
      });
  }

}

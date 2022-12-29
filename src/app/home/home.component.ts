import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public movieService:MovieService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.movieService.getMovies().then((res:any)=>{
      console.log(res);
      this.movieService.movies = res.results;
    }).catch((err)=>{
      console.log(err);
    })
  }

  viewMovie(movieId:number){
    this.router.navigate(['/movie',movieId ])
  }

}

import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(public movieService:MovieService) {}

  searchText= ""

  isPaused = false;

  handleKeyUp(){
    // console.log("key was pressed");
    this.movieService.searchMovies(this.searchText).then((res:any)=>{
      this.movieService.movies = res.results
      console.log(res);
    }).catch(err => {  
      console.log(err);
      
    })
  }


}

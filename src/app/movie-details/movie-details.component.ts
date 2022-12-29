import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit {

  constructor(public movieService:MovieService, private route:ActivatedRoute  ){}

  ngOnInit():void {
    let id = this.route.snapshot.paramMap.get('movieId');
    console.log(id);
    if(id !== null){
      let movieId = parseInt(id);
      this.movieService.getMovieDetails(movieId).then((res:any)=>{
        console.log(res);
        this.movie = res;
      }).catch((err)=>{
        console.log(err);
      })
    }  
  }

  movie:any;

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  public movies:Array<any> = [];


  public getMovies(){
    return new Promise ((resolve,reject)=>{
      this.http.get('https://api.themoviedb.org/3/discover/movie?api_key= &language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').subscribe(
        (res)=>{resolve(res)},
        (err)=>{reject(err)}
      )
    })
  }
  public searchMovies(searchTerm:string){
    return new Promise ((resolve, reject)=>{
      this.http.get(`https://api.themoviedb.org/3/search/company?api_key= &query=${searchTerm}&page=1`).subscribe(
        (res)=>{resolve(res)},
        (err)=>{reject(err)} 
      )
    })

  }
}


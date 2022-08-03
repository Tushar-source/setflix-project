import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';  



@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  // url = "https://api.themoviedb.org/3/trending/all/week?api_key=164c85a7a28fab4e5f329807e67e5a62&language=en-US";
  constructor(private http:HttpClient) { }
  movies1(){
    return this.http.get("https://api.themoviedb.org/3/trending/all/week?api_key=164c85a7a28fab4e5f329807e67e5a62&language=en-US")
  }
  movies2(){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=164c85a7a28fab4e5f329807e67e5a62&with_networks=213")
  }
  movies3(){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=164c85a7a28fab4e5f329807e67e5a62&language=en-US&with_genres=28")
  }

  
  currentDetails = '';
}


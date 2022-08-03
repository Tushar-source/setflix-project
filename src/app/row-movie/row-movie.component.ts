import { Component, OnInit , Input} from '@angular/core';
//import { ApiserviceService } from '../services/apiservice.service';


@Component({
  selector: 'app-row-movie',
  templateUrl: './row-movie.component.html',
  styleUrls: ['./row-movie.component.css']
})
export class RowMovieComponent implements OnInit {
  movie:any = ''
  @Input() title!:any
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
 
}

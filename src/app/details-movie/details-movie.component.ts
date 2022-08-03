import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {
  detailsData:any= [];
  constructor(private details : ApiserviceService) { }

  ngOnInit(): void {
    
   this.detailsData = this.details.currentDetails;
  }


}

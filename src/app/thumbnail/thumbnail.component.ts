import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() apiType:string = ''; 
  
  moviesdata:any= [];
  constructor(private trending: ApiserviceService) { }

  ngOnInit(): void {
    if(this.apiType === 'Trending Now'){
      this.trending.movies2().subscribe((data)=>{
        this.moviesdata = data;
      })
  
    }
    else if(this.apiType==='Netflix original'){
      this.trending.movies1().subscribe((data)=>{
        this.moviesdata = data;
      })
    }
    else{
      this.trending.movies3().subscribe((data)=>{
        this.moviesdata = data;
      })
      
    }
  }
  onImgError(event:any) { 
    event.target.src = 'https://picsum.photos/250/150';
  }
  setDetails(a:any){
    console.log(a);
    //console.log();
    
    this.trending.currentDetails = a;
    console.log(this.trending.currentDetails);
    
  }
}

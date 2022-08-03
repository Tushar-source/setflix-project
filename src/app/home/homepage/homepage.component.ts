import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../typing'
interface Props {
  title: string
  movies: Movie[] 
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title!:string;
  constructor() { }

  ngOnInit(): void {
  
  }

}

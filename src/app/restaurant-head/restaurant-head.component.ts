import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DemoService } from  '../demo.service';
import { ResData } from '../resData';
import { Restaurant } from '../resData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-head',
  templateUrl: './restaurant-head.component.html',
  styleUrls: ['./restaurant-head.component.css']
})
export class RestaurantHeadComponent implements OnInit {

  restList = this.demoService.todos;

  constructor(private dataService:DataService, private demoService:DemoService) { }

  ngOnInit() {
  }
  
  onClick(k)
  {
  	console.log(k.restaurant.R.res_id);
    this.dataService.identity = k.restaurant.R.res_id;
    this.demoService.getRestDetail(this.dataService.identity);
    this.demoService.getRestReviews(this.dataService.identity);
  }
}

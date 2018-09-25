import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service'
import { Restaurant } from '../resData';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Review } from '../resData';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurant_details:Observable<Restaurant>;
  restaurant_reviews:Observable<Review>;
  ans:Restaurant;

  constructor(private demoService:DemoService,private dataService:DataService) { }

  ngOnInit() {
    this.restaurant_details=this.demoService.todos1;	
    this.restaurant_reviews=this.demoService.todosReview;
  }

}

import { Component, OnInit } from '@angular/core';
import { ZomatoService } from './../zomato.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends ZomatoService implements OnInit {

  city: string;
  locations: any;
  locArray: any = [];
  bestRatedRestaurants: any = [];
  locationDetails: any = {};
  isLocationEmpty : boolean = false;
  flipped : boolean = false;
  hideCityTitle : boolean = false;
  topCuisines : any = [];

  constructor(http: HttpClient) {
    super(http);
   }
   
   ngOnInit() {
    
  }

  search(event) {
    if (event.keyCode == 13) {
      this.getLocation(this.city)
        .subscribe(response => {
          this.locations = response;
          if (this.locations) {
            this.locArray = [];
            this.bestRatedRestaurants = [];
            this.isLocationEmpty = false;
            this.locArray = this.locations.location_suggestions;
            if(this.locArray.length === 0){
              this.isLocationEmpty = true;
            }
            this.hideCityTitle = false;
          }
        });
    }
  }

  getLocDetails(city) {
    this.getLocationDetails(city.entity_id, city.entity_type)
      .subscribe(res => {
        this.bestRatedRestaurants = [];
        this.topCuisines = [];
        this.hideCityTitle = false;
        this.locationDetails = res;
        if (this.locationDetails) {
          for (let i = 0; i < 3; i++) {
            this.bestRatedRestaurants.push(this.locationDetails.best_rated_restaurant[i].restaurant);
            this.bestRatedRestaurants[i].flipped = false;
          };

          for(let j = 0; j < this.locationDetails.top_cuisines.length; j++){
            this.topCuisines.push(this.locationDetails.top_cuisines[j]);
          }
          this.hideCityTitle = true;
        }
      });

    }

      flip(best) {
        best.flipped = !best.flipped;
}

}

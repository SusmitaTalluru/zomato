import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  currentLat: any;
  currentLong: any;
  asyncResult:any;

  constructor(private dataService:DataService, private demoService:DemoService) { }

  ngOnInit() {
  }

  onLocation()
{
	if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
        this.dataService.position=position;
        
        this.demoService.getRestList(position);

      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}

showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
   this.dataService.latitude = position.coords.latitude;
   this.dataService.longitude = position.coords.longitude;

    console.log("latitude "+this.currentLat);
     console.log("longitude "+this.currentLong);
}

}

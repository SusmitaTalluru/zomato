import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { FlipModule } from 'ngx-flip';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantHeadComponent } from './restaurant-head/restaurant-head.component';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { InterceptorModule } from './zomatoservice.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  { path:'', component:LocationComponent },
  { path:'restaurant', component:RestaurantHeadComponent },
  { path:'restaurant/details', component:RestaurantsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationComponent,
    RestaurantsComponent,
    RestaurantHeadComponent,
    SearchComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    InterceptorModule,
    FlipModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyzJoZC5HKitz2Hpttl878C6NvKOfC4Y4'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

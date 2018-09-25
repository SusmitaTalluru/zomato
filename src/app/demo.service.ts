import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResData } from './resData';
import { Observable } from 'rxjs';
import { Restaurant } from './resData';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Review } from './resData';
import { RequestOptions, Response } from '@angular/http';




const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': '3ee5a022ebfbd89d5645edeb213382a9'
    })
};


@Injectable({
    providedIn: 'root'
})

export class DemoService {
    latitude: any;
    longitude: any;
    k: Restaurant;

    api_url = "https://developers.zomato.com/api/v2.1";



    //Behaviour Subject for getRestList
    private _todos: BehaviorSubject<Array<Restaurant>> = new BehaviorSubject(null);
    public readonly todos: Observable<Array<Restaurant>> = this._todos.asObservable();


    //Behaviour Subject for getRestDetail
    private _todos1: BehaviorSubject<Restaurant> = new BehaviorSubject(null);
    public readonly todos1: Observable<Restaurant> = this._todos1.asObservable();


    //Behaviour Subject for getting reviews
    private _todosReview: BehaviorSubject<Review> = new BehaviorSubject(null);
    public readonly todosReview: Observable<Review> = this._todosReview.asObservable();




    constructor(private httpClient: HttpClient, private dataService: DataService) { }

    //Below is the API call for getting your location and displaying the restaurants around you
    getRestList(position): Observable<Array<Restaurant>> {

        const obs = this.httpClient.get<ResData>(this.api_url + '/geocode?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude, httpOptions).pipe(map(
            (response: ResData) => {
                console.log(response);
                return response.nearby_restaurants;
            }


        ));

        obs.subscribe(
            res => {
                this._todos.next(res);
                console.log(res);
            });

        return obs;

    }


    //below is the API CALL for getting the details of the selected Restaurant
    getRestDetail(id): Observable<Restaurant> {
        const obs1 = this.httpClient.get<Restaurant>(this.api_url + '/restaurant?res_id=' + id, httpOptions).pipe(map(

            (response: Restaurant) => {

                return response;
            }
        ));

        obs1.subscribe(
            res => {
                this._todos1.next(res)
                console.log(res);
            })

        return obs1;


    }


    //Below API Call is going to be about getting the reviews of the selected restaurants
    getRestReviews(id): Observable<Review> {
        const obs2 = this.httpClient.get<Review>(this.api_url + '/reviews?res_id=' + id, httpOptions).pipe(map(
            //https://developers.zomato.com/api/v2.1/reviews?res_id=59865
            (response: Review) => {

                return response;
            }
        ));

        obs2.subscribe(
            res => {
                this._todosReview.next(res)
                console.log(res);
            })

        return obs2;

    }

}
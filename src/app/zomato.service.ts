import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  private URL_LOCATION = "https://developers.zomato.com/api/v2.1/locations";
  private URL_LOCATION_DETAIL = "https://developers.zomato.com/api/v2.1/location_details";

  constructor(private http: HttpClient) { }

  getLocation(location: string) {
    return this.http.get(this.URL_LOCATION, {
      params: new HttpParams().set("query", location)
    })
  }

  getLocationDetails(id: number, type: string) {
    return this.http.get(this.URL_LOCATION_DETAIL, {
      params: new HttpParams().set("entity_id", id.toString()).set("entity_type", type)
    })
}
}

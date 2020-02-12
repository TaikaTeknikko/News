import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentNews: any

  constructor(private http: HttpClient) {}

  getData(url): Observable<any> {
    const address =`${API_URL}/${url}&apikey=${API_KEY}`;
    //above code OR 
    //const address = environment.apiUrl + '/' + url + '&apikey=' + environment.apiKey;
    return this.http.get(address);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Detail } from './detail.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  url:string = environment.apiBaseUrl+'/Details'
  list:Detail[]=[];
  constructor(private http: HttpClient) { }
  refrechList(){
    this.http.get(this.url)
    .subscribe({
      next: res=>{
        this.list = res as Detail[];
      },
      error: err=>{console.log(err)}
    })
  }
}

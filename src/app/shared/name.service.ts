import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Name } from './name.model';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  urlN:string = environment.apiBaseUrl+'/names'
  listN:Name[]=[];
  constructor(private http: HttpClient) { }
  nameList(){
    this.http.get(this.urlN)
    .subscribe({
      next: resN=>{
        this.listN = resN as Name[];
      },
      error: err=>{console.log(err)}
    })
  }
}

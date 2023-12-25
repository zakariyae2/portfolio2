import { Component, OnInit } from '@angular/core';
import { NameService } from '../shared/name.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public service: NameService){

  }
  ngOnInit(): void {
    this.service.nameList();
  }

}

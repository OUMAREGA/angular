import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //user: string = "Ramuo"
  user = "Ramuo";
  elements = ['Oumar','Bakary'];

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  userClick(){
    alert("Click " + this.user)
  }

}

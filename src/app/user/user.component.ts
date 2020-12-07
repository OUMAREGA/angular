import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_name = "oumarega";

  user = new FormControl('hello')

  constructor() { }

  ngOnInit(): void {
  }

}

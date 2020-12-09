import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DateService} from "../shared/date.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_name = "oumarega";

  //date_service: DateService;

  user = new FormControl('hello');

  user_forms = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  @Input() pass_data: string ;

  constructor( public date_service: DateService) {

    //this.date_service = DateService
  }

  ngOnInit(): void {
    console.log('departure', this.pass_data)
  }

  send(){
    alert(this.user_forms.value.name)
    console.log(this.user_forms)
  }

}

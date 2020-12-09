import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {timer} from "rxjs";
import {map} from "rxjs/operators";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  pass_data: string = '20h';
  train_data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
      .subscribe( (value) => this.train_data = value );

    timer(1000, 2000)
      .pipe(
        map(number => number + 1)
      )
      .subscribe( (number) => console.log("my number" + number) )
  }

}

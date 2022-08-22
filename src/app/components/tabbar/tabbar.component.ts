import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class NavbarComponent implements OnInit {

  subject: String[]=[
    "All",
    "Spring",
    "Data Analytic",
    "Blockchain",
    "IOS",
    "Android",
    "DevOps"
  ]

  constructor() { }

  ngOnInit(): void {
  }
  selectSubject(getsub: String ){
    console.log(getsub);
  }


}

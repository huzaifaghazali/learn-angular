import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName:string = 'huzaifa';
  enable:boolean = true;


  myMethod() {
    return 'This is test description ' + this.userName;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  message:string = 'Hello';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: any): void {
    console.log('Button clicked!');
    this.message=`${event.target.value} Added to the cart`;
  }

  handleInput(event: any): void {
    console.log('Input value:', event.target.value);
    // Add your custom logic here
  }

  getInputInfo(inputInfo: any): void {
    console.log(inputInfo);
    console.log(inputInfo.value);
  }

}

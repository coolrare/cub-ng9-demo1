import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelogo = '/assets/images/logo.png';

  counter = 0;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  changeSiteName(evt: MouseEvent) {
    console.log(evt);
    this.addCounter();
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

  addCounter() {
    this.counter++;
  }

}

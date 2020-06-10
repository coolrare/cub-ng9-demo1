import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cub-ng9-demo1';
  data;

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.datasvc.getData()
    .subscribe(data => {
      this.data = data;
    });
  }

  doSearch(keyword: string) {
    console.dir(keyword);
  }

}

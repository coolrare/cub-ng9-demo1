import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cub-ng9-demo1';
  data$: Observable<Post[]>;

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.data$ = this.datasvc.getData();
  }

  doSearch(keyword: string) {
    console.dir(keyword);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Post;

  constructor() { }

  ngOnInit(): void {
  }

}

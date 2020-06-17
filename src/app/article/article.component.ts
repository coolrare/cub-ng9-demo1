import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Post;

  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}

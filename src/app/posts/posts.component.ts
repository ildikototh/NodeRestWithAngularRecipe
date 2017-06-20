import {Component, OnInit} from '@angular/core';
import {PostsService} from '../shared/services/posts.service';
import { Observable } from 'rxjs/Observable';
import {Posts} from '../shared/models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts: Observable<Array<Posts>>;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.get();
  }
}

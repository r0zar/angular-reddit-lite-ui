import { Component } from '@angular/core';

import data from './posts.json';

interface Post {
  title: string;
  thumbnail: string;
  permalink: string;
  url: string;
  score: number;
  num_comments: number;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  posts: Post = data.data.children.map((child) => child.data);
  constructor(){
    console.log(this.posts[0])
  }
}

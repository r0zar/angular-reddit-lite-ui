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
  posts: Post = data.data.children.map((child) => child.data);
  constructor(){
    console.log(this.posts[0])
  }
  log = () => console.log('!')
  goToReddit = (url) => {
    window.location.href = 'https://reddit.com'+url;
  }
  goTo = (url) => {
    window.location.href = url;
  }
  upvote = (post) => post.score += 1
  downvote = (post) => post.score -= 1
}

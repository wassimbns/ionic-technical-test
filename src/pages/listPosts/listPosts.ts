import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Http } from "@angular/http";

import { PostPage } from "../post/post";

import "rxjs/add/operator/map";

@Component({
  selector: "page-listPosts",
  templateUrl: "listPosts.html"
})
export class ListPostsPage {
  currentPage: number = 0;
  allPosts: Array<any> = [];
  posts: Array<any> = [];
  scrollCallback;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map(res => res.json())
      .subscribe(data => {
        this.allPosts = data;
        this.posts = this.posts.concat(this.allPosts.slice(0, 5));
      });
  }

  onLoadMoreClick(postId) {
    this.navCtrl.push(PostPage, {
      id: postId
    });
  }

  doInfinite(infiniteScroll) {
    this.currentPage = this.currentPage + 5;
    this.posts = this.posts.concat(
      this.allPosts.slice(this.currentPage, this.currentPage + 5)
    );
    infiniteScroll.complete();
  }
}

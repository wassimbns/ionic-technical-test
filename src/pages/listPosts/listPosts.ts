import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import "rxjs/add/operator/map";

import { PostPage } from "../post/post";
import { DataServiceProvider } from "../../providers/data-service/data-service";

@Component({
  selector: "page-listPosts",
  templateUrl: "listPosts.html"
})
export class ListPostsPage {
  currentPage: number = 0;
  allPosts: Array<any> = [];
  posts: Array<any> = [];
  scrollCallback;

  constructor(
    public navCtrl: NavController,
    public dataServiceProvider: DataServiceProvider
  ) {
    this.dataServiceProvider.getPosts().subscribe(data => {
      this.allPosts = data;
      this.posts = this.posts.concat(this.allPosts.slice(0, 5));
    });
  }

  onLoadMoreClick(post) {
    this.navCtrl.push(PostPage, {
      post: post
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

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import { PostCommentsComponent } from "../../components/post-comments/post-comments";
@Component({
  selector: "page-post",
  templateUrl: "post.html"
})
export class PostPage {
  id: number;
  commentsLength: number;
  title: string;
  body: string;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams
  ) {
    this.commentsLength = 0;
    this.id = navParams.get("post").id;
    this.title = navParams.get("post").title;
    this.body = navParams.get("post").body;
  }

  handleUpdateCommentsLength(arg) {
    this.commentsLength = arg[0];
  }
}

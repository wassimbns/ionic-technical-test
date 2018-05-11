import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import { PostCommentsComponent } from "../../components/post-comments/post-comments";
@Component({
  selector: "page-post",
  templateUrl: "post.html"
})
export class PostPage {
  id: any;
  comments: any;
  title: any;
  body: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams
  ) {
    this.id = navParams.get("id");
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .map(res => res.json())
      .subscribe(data => {
        this.title = data.title;
        this.body = data.body;
      });
  }
}

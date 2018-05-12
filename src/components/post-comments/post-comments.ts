import { Component, EventEmitter, Output } from "@angular/core";
import { Http } from "@angular/http";
import { NavController, NavParams } from "ionic-angular";

import { DataServiceProvider } from "../../providers/data-service/data-service";
@Component({
  selector: "post-comments",
  templateUrl: "post-comments.html"
})
export class PostCommentsComponent {
  i: number;
  id: number;
  comments: any;

  @Output() public updateCommentsLength = new EventEmitter();
  constructor(
    public navCtrl: NavController,
    public dataServiceProvider: DataServiceProvider,
    public navParams: NavParams
  ) {
    this.id = navParams.get("post").id;
    this.dataServiceProvider.getComments(this.id).subscribe(data => {
      this.comments = data;
      if (data == null) this.fireUpdateCommentsLength(0);
      else this.fireUpdateCommentsLength(data.length);
    });
  }

  fireUpdateCommentsLength(commentsLength) {
    this.updateCommentsLength.next([commentsLength]);
  }
}

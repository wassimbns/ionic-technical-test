import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController,NavParams } from 'ionic-angular';
/**
 * Generated class for the PostCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-comments',
  templateUrl: 'post-comments.html'
})
export class PostCommentsComponent {
i:number;
id:number;
comments:any;

constructor(public navCtrl : NavController, public http : Http, public navParams: NavParams) {
  this.id = navParams.get('id');
  this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`).map(res => res.json()).subscribe(data => {
    this.comments = data;
});

}

}

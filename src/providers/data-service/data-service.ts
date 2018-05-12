import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

const API_URL = "https://jsonplaceholder.typicode.com";
@Injectable()
export class DataServiceProvider {
  constructor(public http: Http, private storage: Storage) {}

  getPosts(): Observable<any> {
    return this.http
      .get(API_URL + "/posts")
      .map(res => {
        let body = res.json();
        // Save posts from api http request in local storage
        this.storage.set("posts", body);
        return body;
      })
      .catch((e: any) =>
        // retrieve posts from the local storage
        this.storage.get("posts").then(val => val)
      );
  }

  getComments(postId): Observable<any> {
    return this.http
      .get(API_URL + `/posts/${postId}/comments`)
      .map(res => {
        let body = res.json();
        // Save comments of a particular post from api http request in local storage
        this.storage.set(`/posts/${postId}/comments`, body);
        return body;
      })
      .catch((e: any) =>
        // retrieve comments of a particular post from the local storage
        this.storage.get(`/posts/${postId}/comments`).then(val => val)
      );
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { ListPostsPage } from "../pages/listPosts/listPosts";
import { PostPage } from "../pages/post/post";
import { PostCommentsComponent } from "../components/post-comments/post-comments";
import { Network } from "@ionic-native/network";

@NgModule({
  declarations: [MyApp, ListPostsPage, PostPage, PostCommentsComponent],

  imports: [HttpModule, BrowserModule, IonicModule.forRoot(MyApp)],

  bootstrap: [IonicApp],

  entryComponents: [MyApp, ListPostsPage, PostPage, PostCommentsComponent],

  providers: [
    Network,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

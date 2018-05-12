import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { ListPostsPage } from "../pages/listPosts/listPosts";
import { PostPage } from "../pages/post/post";
import { PostCommentsComponent } from "../components/post-comments/post-comments";
import { Network } from "@ionic-native/network";
import { IonicStorageModule } from "@ionic/storage";
import { DataServiceProvider } from "../providers/data-service/data-service";

@NgModule({
  declarations: [MyApp, ListPostsPage, PostPage, PostCommentsComponent],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],

  bootstrap: [IonicApp],

  entryComponents: [MyApp, ListPostsPage, PostPage, PostCommentsComponent],

  providers: [
    Network,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider
  ]
})
export class AppModule {}

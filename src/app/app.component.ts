import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ListPostsPage } from "../pages/listPosts/listPosts";
import { Network } from "@ionic-native/network";
import { AlertController } from "ionic-angular";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = ListPostsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private network: Network,
    private alertCtrl: AlertController
  ) {
    this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create({
        title: "No internet connection!",
        subTitle: "You are now using the app off ligne ",
        buttons: ["got it !"]
      });
      alert.present();
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Low battery",
      subTitle: "10% of battery remaining",
      buttons: ["Dismiss"]
    });
    alert.present();
  }
}

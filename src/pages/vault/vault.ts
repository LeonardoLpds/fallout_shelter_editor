import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the VaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vault',
  templateUrl: 'vault.html',
})
export class VaultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  goHome() {
    this.app.getRootNavs()[0].setRoot('HomePage')
  }

}

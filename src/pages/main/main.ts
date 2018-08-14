import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  vaultRoot = 'VaultPage'
  dwellersRoot = 'DwellersPage'
  storageRoot = 'StoragePage'

  config : any = {};
  toVault : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.config = navParams.data;
    this.toVault = {...this.config.vault, ...this.config.timeMgr};
  }

  ionViewCanEnter(): boolean{
    if (Object.keys(this.navParams.data).length === 0) {
      this.navCtrl.setRoot('HomePage');
    }
    return true;
  }

}

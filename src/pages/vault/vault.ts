import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController } from 'ionic-angular';

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
  vault : any = {};
  vault_tab : String = 'status';

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public popoverCtrl: PopoverController) {
    this.vault = this.navParams.data;
    console.log(this.vault);
  }

  presentPopover(event, params) {
    let popover = this.popoverCtrl.create("StimpackRadawayPage", params, {enableBackdropDismiss: false});
    popover.onDidDismiss(data => {
      this.vault.storage.resources[params.name] = data;
    });
    popover.present({
      ev: event
    });
  }

  getTime(time) {
    return new Date(time / 10000 - Math.abs(new Date(0, 0, 1).setFullYear(1)));
  }

  dateDiff(start, end) {
    return Math.round((end - start) / (1000*60*60*24))
  }

  ionViewCanEnter(): boolean{
    if (Object.keys(this.vault).length === 0) {
      return false;
    }
    return true;
  }
}
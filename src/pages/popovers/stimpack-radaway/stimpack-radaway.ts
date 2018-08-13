import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stimpack-radaway',
  templateUrl: 'stimpack-radaway.html',
})
export class StimpackRadawayPage {
  quantity : Number = 0;
  name : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.quantity = this.navParams.get('qtd');
    this.name = this.navParams.get('name');
  }

  change(value: Number) {
    this.quantity = value;
  }

  close() {
    this.viewCtrl.dismiss(this.quantity);
  }

}

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    HttpClient
  }

  openVault() {
    this.httpClient.get('/assets/vault.json').subscribe(vault => {
      this.navCtrl.setRoot('MainPage', vault);
    })
  }

}

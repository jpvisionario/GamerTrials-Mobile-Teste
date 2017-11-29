import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginuPage } from '../loginu/loginu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUserLogin(){
    this.navCtrl.push(LoginuPage)
  }

}

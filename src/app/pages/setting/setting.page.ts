import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  private VERSION: string = "1.8.3";

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
}

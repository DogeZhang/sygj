import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
export const APP_KEY: string = 'App';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  private VERSION: string = "1.8.3";

  constructor(
    private localStorageService: LocalStorageService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  onLogout() {
    this.localStorageService.set("userInfo", "")
    this.localStorageService.set(APP_KEY, {
      hasRun: false,
      version: '1.0.0'
    })
    this.navCtrl.navigateForward("welcome");
  }
}

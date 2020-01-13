import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-store-abbreviation',
  templateUrl: './store-abbreviation.page.html',
  styleUrls: ['./store-abbreviation.page.scss'],
})
export class StoreAbbreviationPage implements OnInit {
  private userInfo = {shopAbbr: ''}
  private storeAbbreviation = ""

  constructor(
    private localStorageService: LocalStorageService,
    private alertCtrl: AlertController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  async saveStoreAbbreviation () {
    this.userInfo = this.localStorageService.get('userInfo', JSON)
    if(this.storeAbbreviation == "" || this.storeAbbreviation == " "){
      let emptyError = await this.alertCtrl.create({
        message: '不可为空'
      })
      emptyError.present()
    } else {
      let emptyError = await this.alertCtrl.create({
        message: '店铺简称保存为：' + this.storeAbbreviation
      })
      emptyError.present()
      this.userInfo.shopAbbr = this.storeAbbreviation
      console.log(this.userInfo)
      this.localStorageService.set("userInfo", this.userInfo)
    }
    console.log("storeAbbreviation: " + this.storeAbbreviation)
  }
}

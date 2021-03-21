import { AdMobPlus, BannerAd } from '@admob-plus/capacitor';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) { 
    this.initializeApp();
  }

  private async initializeApp() {
    await this.platform.ready();
    await AdMobPlus.start();

    const banner = new BannerAd({
      adUnitId: 'ca-app-pub-3940256099942544/6300978111'
    });

    await banner.show();
  }
}

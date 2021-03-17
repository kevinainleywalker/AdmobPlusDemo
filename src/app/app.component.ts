import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private screenOrientation: ScreenOrientation) { 
    this.initializeApp();
  }

  private async initializeApp() {
    await this.platform.ready();

    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed");
      }
    );
  }
}

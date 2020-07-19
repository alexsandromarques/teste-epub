import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {
  private toc: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toc = navParams.data.toc;
  }

  selectToc(content) {
    // this.events.publish('select:toc', content);
    this.navCtrl.pop();
  }
}

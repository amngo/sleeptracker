import { FirebaseService } from './../services/firebase.service';
import { LogSleepinessPage } from './../log-sleepiness/log-sleepiness.page';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { LogOvernightSleepPage } from '../log-overnight-sleep/log-overnight-sleep.page';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.page.html',
  styleUrls: ['./view-log.page.scss']
})
export class ViewLogPage implements OnInit {
  current: string = 'sleep';
  dates: string[] = [];

  constructor(
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public sleepService: SleepService,
    public db: FirebaseService
  ) {}

  ngOnInit() {
    this.db.getSleepinessLogs().subscribe(data => this.dates = this.getDates());
  }

  // Present an action sheet for selecting which type of entry to add
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'New Entry',
      buttons: [
        {
          text: 'Overnight Sleep',
          icon: 'bed',
          handler: async (): Promise<any> => {
            const modal = await this.modalController.create({
              component: LogOvernightSleepPage
            });
            return await modal.present();
          }
        },
        {
          text: 'Sleepiness',
          icon: 'sunny',
          handler: async (): Promise<any> => {
            const modal = await this.modalController.create({
              component: LogSleepinessPage
            });
            return await modal.present();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  get allOvernightSleepData() {
    return SleepService.AllOvernightData;
  }

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }

  get allSleepinessDataGrouped() {
    return SleepService.AllSleepinessDataGrouped;
  }

  // Get all the unique logged dates as an array
  getDates() {
    const dates = this.allSleepinessData.map(data => data.date);
    return Array.from(new Set(dates));
  }

  // Listen to any changes in the array of entries
  segmentChanged(ev: CustomEvent) {
    this.current = ev.detail.value;
  }
}

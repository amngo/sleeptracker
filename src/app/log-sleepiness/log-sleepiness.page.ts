import { SleepService } from './../services/sleep.service';
import { ScaleValues } from './../data/stanford-sleepiness-data';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as shortid from 'shortid';
import * as moment from 'moment';
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-log-sleepiness',
  templateUrl: './log-sleepiness.page.html',
  styleUrls: ['./log-sleepiness.page.scss']
})
export class LogSleepinessPage implements OnInit {
  value: number = 4;
  description: string = ScaleValues[this.value];
  dateTime: string;
  valueColor: string = this.calculateColor();

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public sleepService: SleepService
  ) {}

  ngOnInit() {
    this.dateTime = moment().format();
  }

  onClose() {
    this.modalController.dismiss();
  }

  onChange(ev: CustomEvent) {
    this.description = ScaleValues[this.value];
    this.valueColor = this.calculateColor();
  }

  calculateColor(): string {
    return chroma.mix('green', 'red', this.value / 7, 'hsl').toString();
  }

  async onAddEntry() {
    const date = moment(this.dateTime);
    this.sleepService.logSleepinessData({
      id: shortid(),
      loggedAt: new Date(),
      date: date.format('dddd, MMMM Do'),
      time: date.format('hh:mm a'),
      loggedValue: this.value,
      color: this.calculateColor(),
      description: ScaleValues[this.value]
    });
    const toast = await this.toastController.create({
      message: 'Your entry has been added.',
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    this.modalController.dismiss();
    toast.present();
  }
}

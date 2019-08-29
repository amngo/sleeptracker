import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import * as moment from 'moment';
import * as shortid from 'shortid';

@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: './log-overnight-sleep.page.html',
  styleUrls: ['./log-overnight-sleep.page.scss']
})
export class LogOvernightSleepPage implements OnInit {
  startDate: string;
  endDate: string;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public sleepService: SleepService
  ) {}

  ngOnInit() {
    // Get yesterday's date
    this.startDate = moment()
      .subtract(1, 'days')
      .format();

    // Get current date
    this.endDate = moment().format();
  }

  onClose() {
    this.modalController.dismiss();
  }

  async onAddEntry() {
    const today = moment();
    this.sleepService.logOvernightData({
      id: shortid(),
      loggedAt: today.toDate(),
      date: today.format('dddd, MMMM Do'),
      time: today.format('hh:mm a'),
      duration: this.calculateDuration()
    });

    const toast = await this.toastController.create({
      message: 'Your entry has been added.',
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Undo'
    });
    this.modalController.dismiss();
    toast.present();
  }

  calculateDuration(): string {
    const start = moment(this.startDate);
    const end = moment(this.endDate);
    const duration = moment.duration(end.diff(start));

    const hours = duration.hours();
    const minutes = duration.minutes();

    return `${hours}h ${minutes}m`;
  }
}

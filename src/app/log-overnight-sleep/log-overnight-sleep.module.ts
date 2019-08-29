import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogOvernightSleepPage } from './log-overnight-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: LogOvernightSleepPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogOvernightSleepPage]
})
export class LogOvernightSleepPageModule {}

import { LogOvernightSleepPageModule } from './../log-overnight-sleep/log-overnight-sleep.module';
import { ViewLogPageModule } from './../view-log/view-log.module';
import { HomePageModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { LogSleepinessPageModule } from '../log-sleepiness/log-sleepiness.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HomePageModule,
    ViewLogPageModule,
    LogOvernightSleepPageModule,
    LogSleepinessPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

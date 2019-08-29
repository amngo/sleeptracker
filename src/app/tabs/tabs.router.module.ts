import { LogSleepinessPage } from './../log-sleepiness/log-sleepiness.page';
import { LogOvernightSleepPage } from './../log-overnight-sleep/log-overnight-sleep.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ViewLogPage } from '../view-log/view-log.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'view-log',
        outlet: 'view-log',
        component: ViewLogPage
      },
      {
        path: 'log-overnight-sleep',
        outlet: 'log-overnight-sleep',
        component: LogOvernightSleepPage
      },
      {
        path: 'log-sleepiness',
        outlet: 'log-sleepiness',
        component: LogSleepinessPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

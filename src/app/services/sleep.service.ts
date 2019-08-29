import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
  static AllOvernightData: OvernightSleepData[] = [];
  static AllSleepinessData: StanfordSleepinessData[] = [];
  static AllSleepinessDataGrouped: {} = {};

  constructor(private db: FirebaseService) {
    this.db.getSleepLogs().subscribe(logs => {
      SleepService.AllOvernightData = logs.map((log: OvernightSleepData) => log);
      console.log(SleepService.AllOvernightData);
    });
    this.db.getSleepinessLogs().subscribe(logs => {
      SleepService.AllSleepinessDataGrouped = {};
      SleepService.AllSleepinessData = logs.map((log: StanfordSleepinessData) => {
        this.groupData(log);
        return log;
      });
      console.log(SleepService.AllSleepinessData);
      console.log(SleepService.AllSleepinessDataGrouped);
    });
  }

  public logOvernightData(sleepData: OvernightSleepData) {
    this.db.addSleepLog(sleepData);
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    this.db.addSleepinessLog(sleepData);
  }

  public groupData(sleepData: StanfordSleepinessData) {
    const date = sleepData.date;

    SleepService.AllSleepinessData.push(sleepData);
    // Group dates together
    if (!SleepService.AllSleepinessDataGrouped.hasOwnProperty(date)) {
      SleepService.AllSleepinessDataGrouped[date] = [];
    }
    SleepService.AllSleepinessDataGrouped[date].push(sleepData);
  }
}

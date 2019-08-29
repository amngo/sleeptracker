import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  sleepLogs: AngularFirestoreCollection;
  sleepinessLogs: AngularFirestoreCollection;

  constructor(db: AngularFirestore) {
    this.sleepLogs = db.collection('sleep-logs');
    this.sleepinessLogs = db.collection('sleepiness-logs');
  }

  addSleepLog(log: OvernightSleepData) {
    // TODO: implement this function to add sleep logs
    this.sleepLogs.add(log);
  }

  addSleepinessLog(log: StanfordSleepinessData) {
    // TODO: implement this function to add sleep logs
    console.log(log);
    this.sleepinessLogs.add(log);
  }

  getSleepLogs(): Observable<DocumentData[]> {
    // TODO: implement this function to retrieve sleep logs
    return this.sleepLogs.valueChanges();
  }

  getSleepinessLogs(): Observable<DocumentData[]> {
    // TODO: implement this function to retrieve sleepiness logs
    return this.sleepinessLogs.valueChanges();
  }
}

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOvernightSleepPage } from './log-overnight-sleep.page';

describe('LogOvernightSleepPage', () => {
  let component: LogOvernightSleepPage;
  let fixture: ComponentFixture<LogOvernightSleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOvernightSleepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOvernightSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

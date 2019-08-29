import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogPage } from './view-log.page';

describe('ViewLogPage', () => {
  let component: ViewLogPage;
  let fixture: ComponentFixture<ViewLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

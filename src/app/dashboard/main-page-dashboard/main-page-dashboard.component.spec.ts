import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDashboardComponent } from './main-page-dashboard.component';

describe('MainPageDashboardComponent', () => {
  let component: MainPageDashboardComponent;
  let fixture: ComponentFixture<MainPageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

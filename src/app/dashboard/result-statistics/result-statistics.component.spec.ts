import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStatisticsComponent } from './result-statistics.component';

describe('ResultStatisticsComponent', () => {
  let component: ResultStatisticsComponent;
  let fixture: ComponentFixture<ResultStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

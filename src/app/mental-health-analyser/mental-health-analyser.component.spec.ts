import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthAnalyserComponent } from './mental-health-analyser.component';

describe('MentalHealthAnalyserComponent', () => {
  let component: MentalHealthAnalyserComponent;
  let fixture: ComponentFixture<MentalHealthAnalyserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalHealthAnalyserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalHealthAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

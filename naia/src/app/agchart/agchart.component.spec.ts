import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgchartComponent } from './agchart.component';

describe('AgchartComponent', () => {
  let component: AgchartComponent;
  let fixture: ComponentFixture<AgchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgchartComponent]
    });
    fixture = TestBed.createComponent(AgchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

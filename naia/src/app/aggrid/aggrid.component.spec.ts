import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridComponent } from './aggrid.component';

describe('AggridComponent', () => {
  let component: AggridComponent;
  let fixture: ComponentFixture<AggridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggridComponent]
    });
    fixture = TestBed.createComponent(AggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

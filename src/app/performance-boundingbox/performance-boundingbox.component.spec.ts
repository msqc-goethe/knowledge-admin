import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBoundingboxComponent } from './performance-boundingbox.component';

describe('PerformanceBoundingboxComponent', () => {
  let component: PerformanceBoundingboxComponent;
  let fixture: ComponentFixture<PerformanceBoundingboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceBoundingboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceBoundingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

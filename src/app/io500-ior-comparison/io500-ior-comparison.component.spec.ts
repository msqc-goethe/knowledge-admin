import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io500IorComparisonComponent } from './io500-ior-comparison.component';

describe('Io500IorComparisonComponent', () => {
  let component: Io500IorComparisonComponent;
  let fixture: ComponentFixture<Io500IorComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io500IorComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Io500IorComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

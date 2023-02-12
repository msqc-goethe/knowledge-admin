import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComparisonComponent } from './custom-comparison.component';
import { CustomCompWindowFormComponent } from './custom-comp-window-form.component';

describe('CustomComparisonComponent', () => {
  let component: CustomComparisonComponent;
  let fixture: ComponentFixture<CustomComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CustomCompWindowFormComponent', () => {
  let component: CustomCompWindowFormComponent;
  let fixture: ComponentFixture<CustomCompWindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCompWindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCompWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


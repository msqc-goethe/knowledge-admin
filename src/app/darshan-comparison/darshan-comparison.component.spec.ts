import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanComparisonComponent } from './darshan-comparison.component';
import { SmartTableResultDarshanComponent } from './smart-table-result-darshan.component';
import { DarshanWindowFormComponent } from './darshan-result-comparison-window-form.component';

describe('DarshanComparisonComponent', () => {
  let component: DarshanComparisonComponent;
  let fixture: ComponentFixture<DarshanComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SmartTableResultDarshanComponent', () => {
  let component: SmartTableResultDarshanComponent;
  let fixture: ComponentFixture<SmartTableResultDarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableResultDarshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTableResultDarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('DarshanWindowFormComponent', () => {
  let component: DarshanWindowFormComponent;
  let fixture: ComponentFixture<DarshanWindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanWindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

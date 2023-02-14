import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IorComparisonComponent } from './ior-comparison.component';
import { WindowFormComponent } from './result-comparison-window-form.component';
import { SmartTableResultComponent } from './smart-table-result.component';

describe('IorComparisonComponent', () => {
  let component: IorComparisonComponent;
  let fixture: ComponentFixture<IorComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IorComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IorComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SmartTableResultComponent', () => {
  let component: SmartTableResultComponent;
  let fixture: ComponentFixture<SmartTableResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IorComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTableResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('WindowFormComponent', () => {
  let component: WindowFormComponent;
  let fixture: ComponentFixture<WindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


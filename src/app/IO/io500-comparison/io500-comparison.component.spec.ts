import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io500ComparisonComponent } from './io500-comparison.component';
import { IO500CompWindowFormComponent } from './io500-comp-window-form.component';

describe('Io500ComparisonComponent', () => {
  let component: Io500ComparisonComponent;
  let fixture: ComponentFixture<Io500ComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io500ComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Io500ComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('IO500CompWindowFormComponent', () => {
  let component: IO500CompWindowFormComponent;
  let fixture: ComponentFixture<IO500CompWindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IO500CompWindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IO500CompWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

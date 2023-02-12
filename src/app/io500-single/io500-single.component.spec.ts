import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io500SingleComponent } from './io500-single.component';
import { IO500WindowFormComponent } from './io500-window-form.component';

describe('Io500SingleComponent', () => {
  let component: Io500SingleComponent;
  let fixture: ComponentFixture<Io500SingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io500SingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Io500SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Io500SingleComponent', () => {
  let component: IO500WindowFormComponent;
  let fixture: ComponentFixture<IO500WindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IO500WindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IO500WindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSingleComponent } from './custom-single.component';
import { CustomWindowFormComponent } from './custom-window-form.component';

describe('CustomSingleComponent', () => {
  let component: CustomSingleComponent;
  let fixture: ComponentFixture<CustomSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CustomWindowFormComponent', () => {
  let component: CustomWindowFormComponent;
  let fixture: ComponentFixture<CustomWindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomWindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

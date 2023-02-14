import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanSingleComponent } from './darshan-single.component';

describe('DarshanSingleComponent', () => {
  let component: DarshanSingleComponent;
  let fixture: ComponentFixture<DarshanSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

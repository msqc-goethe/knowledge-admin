import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IorSingleComponent } from './ior-single.component';

describe('IorSingleComponent', () => {
  let component: IorSingleComponent;
  let fixture: ComponentFixture<IorSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IorSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

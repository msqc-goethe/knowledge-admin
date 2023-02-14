import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IorBuilderComponent } from './ior-builder.component';

describe('IorBuilderComponent', () => {
  let component: IorBuilderComponent;
  let fixture: ComponentFixture<IorBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IorBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IorBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

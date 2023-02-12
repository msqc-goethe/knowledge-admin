import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlurmDashboardComponent } from './slurm-dashboard.component';

describe('SlurmDashboardComponent', () => {
  let component: SlurmDashboardComponent;
  let fixture: ComponentFixture<SlurmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlurmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlurmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

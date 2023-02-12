import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDashboardComponent } from './knowledge-dashboard.component';

describe('KnowledgeDashboardComponent', () => {
  let component: KnowledgeDashboardComponent;
  let fixture: ComponentFixture<KnowledgeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

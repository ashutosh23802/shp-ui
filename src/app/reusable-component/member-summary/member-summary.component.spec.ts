import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailComponent } from './member-summary.component';

describe('MemberSummaryComponent', () => {
  let component: RegistrationDetailComponent;
  let fixture: ComponentFixture<RegistrationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

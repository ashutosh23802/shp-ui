import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSummaryComponent } from './member-summary.component';

describe('MemberSummaryComponent', () => {
  let component: MemberSummaryComponent;
  let fixture: ComponentFixture<MemberSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

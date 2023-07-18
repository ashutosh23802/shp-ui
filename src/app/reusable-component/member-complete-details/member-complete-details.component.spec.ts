import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCompleteDetailsComponent } from './member-complete-details.component';

describe('MemberCompleteDetailsComponent', () => {
  let component: MemberCompleteDetailsComponent;
  let fixture: ComponentFixture<MemberCompleteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCompleteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberCompleteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

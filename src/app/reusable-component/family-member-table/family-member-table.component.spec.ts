import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberTableComponent } from './family-member-table.component';

describe('FamilyMemberTableComponent', () => {
  let component: FamilyMemberTableComponent;
  let fixture: ComponentFixture<FamilyMemberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMemberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

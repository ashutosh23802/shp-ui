import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyHeadDialogueComponent } from './add-family-head-dialogue.component';

describe('AddFamilyHeadDialogueComponent', () => {
  let component: AddFamilyHeadDialogueComponent;
  let fixture: ComponentFixture<AddFamilyHeadDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamilyHeadDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFamilyHeadDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

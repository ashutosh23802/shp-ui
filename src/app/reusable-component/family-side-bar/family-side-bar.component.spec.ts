import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySideBarComponent } from './family-side-bar.component';

describe('FamilySideBarComponent', () => {
  let component: FamilySideBarComponent;
  let fixture: ComponentFixture<FamilySideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilySideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

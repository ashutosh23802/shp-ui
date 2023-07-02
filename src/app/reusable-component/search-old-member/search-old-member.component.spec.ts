import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOldMemberComponent } from './search-old-member.component';

describe('SearchOldMemberComponent', () => {
  let component: SearchOldMemberComponent;
  let fixture: ComponentFixture<SearchOldMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOldMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOldMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFamilyComponent } from './search-family.component';

describe('SearchFamilyComponent', () => {
  let component: SearchFamilyComponent;
  let fixture: ComponentFixture<SearchFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

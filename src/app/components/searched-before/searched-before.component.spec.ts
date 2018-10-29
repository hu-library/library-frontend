import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedBeforeComponent } from './searched-before.component';

describe('SearchedBeforeComponent', () => {
  let component: SearchedBeforeComponent;
  let fixture: ComponentFixture<SearchedBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

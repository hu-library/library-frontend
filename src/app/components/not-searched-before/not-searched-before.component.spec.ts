import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSearchedBeforeComponent } from './not-searched-before.component';

describe('NotSearchedBeforeComponent', () => {
  let component: NotSearchedBeforeComponent;
  let fixture: ComponentFixture<NotSearchedBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSearchedBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSearchedBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

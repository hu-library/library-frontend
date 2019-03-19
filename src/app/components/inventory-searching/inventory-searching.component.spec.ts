import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySearchingComponent } from './inventory-searching.component';

describe('InventorySearchingComponent', () => {
  let component: InventorySearchingComponent;
  let fixture: ComponentFixture<InventorySearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

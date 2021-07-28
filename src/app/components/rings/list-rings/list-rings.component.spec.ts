import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRingsComponent } from './list-rings.component';

describe('ListRingsComponent', () => {
  let component: ListRingsComponent;
  let fixture: ComponentFixture<ListRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

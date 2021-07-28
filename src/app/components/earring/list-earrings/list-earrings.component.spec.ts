import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEarringsComponent } from './list-earrings.component';

describe('ListEarringsComponent', () => {
  let component: ListEarringsComponent;
  let fixture: ComponentFixture<ListEarringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEarringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

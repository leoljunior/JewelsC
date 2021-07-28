import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRingsComponent } from './create-rings.component';

describe('CreateRingsComponent', () => {
  let component: CreateRingsComponent;
  let fixture: ComponentFixture<CreateRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

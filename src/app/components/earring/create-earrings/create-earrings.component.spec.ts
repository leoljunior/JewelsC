import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEarringsComponent } from './create-earrings.component';

describe('CreateEarringsComponent', () => {
  let component: CreateEarringsComponent;
  let fixture: ComponentFixture<CreateEarringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEarringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

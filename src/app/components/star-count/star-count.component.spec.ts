import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCountComponent } from './star-count.component';

describe('StarCountComponent', () => {
  let component: StarCountComponent;
  let fixture: ComponentFixture<StarCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

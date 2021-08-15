import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TngError } from './error.component';

describe('TngError', () => {
  let component: TngError;
  let fixture: ComponentFixture<TngError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TngError],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TngError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

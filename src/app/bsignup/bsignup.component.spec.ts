import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsignupComponent } from './bsignup.component';

describe('BsignupComponent', () => {
  let component: BsignupComponent;
  let fixture: ComponentFixture<BsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsignupComponent]
    });
    fixture = TestBed.createComponent(BsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

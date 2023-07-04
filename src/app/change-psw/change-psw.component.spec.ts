import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePswComponent } from './change-psw.component';

describe('ChangePswComponent', () => {
  let component: ChangePswComponent;
  let fixture: ComponentFixture<ChangePswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePswComponent]
    });
    fixture = TestBed.createComponent(ChangePswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

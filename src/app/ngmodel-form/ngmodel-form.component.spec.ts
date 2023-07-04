import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelFormComponent } from './ngmodel-form.component';

describe('NgmodelFormComponent', () => {
  let component: NgmodelFormComponent;
  let fixture: ComponentFixture<NgmodelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmodelFormComponent]
    });
    fixture = TestBed.createComponent(NgmodelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

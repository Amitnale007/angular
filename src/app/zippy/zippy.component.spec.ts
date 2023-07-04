import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyComponent } from './zippy.component';

describe('ZippyComponent', () => {
  let component: ZippyComponent;
  let fixture: ComponentFixture<ZippyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyComponent]
    });
    fixture = TestBed.createComponent(ZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

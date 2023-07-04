import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshGitComponent } from './mosh-git.component';

describe('MoshGitComponent', () => {
  let component: MoshGitComponent;
  let fixture: ComponentFixture<MoshGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoshGitComponent]
    });
    fixture = TestBed.createComponent(MoshGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

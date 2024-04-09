import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIssueDetailsComponent } from './display-issue-details.component';

describe('DisplayIssueDetailsComponent', () => {
  let component: DisplayIssueDetailsComponent;
  let fixture: ComponentFixture<DisplayIssueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayIssueDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

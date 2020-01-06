import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInContainerComponent } from './logged-in-container.component';

describe('LoggedInContainerComponent', () => {
  let component: LoggedInContainerComponent;
  let fixture: ComponentFixture<LoggedInContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

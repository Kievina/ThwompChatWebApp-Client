import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieListComponent } from './cookie-list.component';

describe('CookieListComponent', () => {
  let component: CookieListComponent;
  let fixture: ComponentFixture<CookieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

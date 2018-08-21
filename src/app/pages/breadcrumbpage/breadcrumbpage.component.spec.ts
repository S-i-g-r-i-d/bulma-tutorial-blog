import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbpageComponent } from './breadcrumbpage.component';

describe('BreadcrumbpageComponent', () => {
  let component: BreadcrumbpageComponent;
  let fixture: ComponentFixture<BreadcrumbpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

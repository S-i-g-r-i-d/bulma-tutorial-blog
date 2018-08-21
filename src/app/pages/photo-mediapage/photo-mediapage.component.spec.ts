import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMediapageComponent } from './photo-mediapage.component';

describe('PhotoMediapageComponent', () => {
  let component: PhotoMediapageComponent;
  let fixture: ComponentFixture<PhotoMediapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoMediapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoMediapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

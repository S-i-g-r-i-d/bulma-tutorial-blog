import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecardpageComponent } from './imagecardpage.component';

describe('ImagecardpageComponent', () => {
  let component: ImagecardpageComponent;
  let fixture: ComponentFixture<ImagecardpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecardpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

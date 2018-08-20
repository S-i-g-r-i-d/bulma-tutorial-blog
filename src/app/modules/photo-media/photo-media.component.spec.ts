import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMediaComponent } from './photo-media.component';

describe('PhotoMediaComponent', () => {
  let component: PhotoMediaComponent;
  let fixture: ComponentFixture<PhotoMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

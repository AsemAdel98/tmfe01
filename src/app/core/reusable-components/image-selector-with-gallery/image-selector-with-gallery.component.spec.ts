import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectorWithGalleryComponent } from './image-selector-with-gallery.component';

describe('ImageSelectorWithGalleryComponent', () => {
  let component: ImageSelectorWithGalleryComponent;
  let fixture: ComponentFixture<ImageSelectorWithGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSelectorWithGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageSelectorWithGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

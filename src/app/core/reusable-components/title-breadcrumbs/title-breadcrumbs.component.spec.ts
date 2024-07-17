import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBreadcrumbsComponent } from './title-breadcrumbs.component';

describe('TitleBreadcrumbsComponent', () => {
  let component: TitleBreadcrumbsComponent;
  let fixture: ComponentFixture<TitleBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBreadcrumbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

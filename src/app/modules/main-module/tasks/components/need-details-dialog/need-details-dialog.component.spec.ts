import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedDetailsDialogComponent } from './need-details-dialog.component';

describe('NeedDetailsDialogComponent', () => {
  let component: NeedDetailsDialogComponent;
  let fixture: ComponentFixture<NeedDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeedDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

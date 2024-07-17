import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningLogoutDialogComponent } from './warning-logout-dialog.component';

describe('WarningLogoutDialogComponent', () => {
  let component: WarningLogoutDialogComponent;
  let fixture: ComponentFixture<WarningLogoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningLogoutDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningLogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

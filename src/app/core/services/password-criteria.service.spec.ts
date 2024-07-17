import { TestBed } from '@angular/core/testing';

import { PasswordCriteriaService } from './password-criteria.service';

describe('PasswordCriteriaService', () => {
  let service: PasswordCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordCriteriaService {
  passwordCriteria: { text: string; isMet: () => boolean }[] = [
    { text: 'PASSWORD.ONE_LOWERCASE', isMet: this.hasLowercase.bind(this) },
    { text: 'PASSWORD.ONE_UPPERCASE', isMet: this.hasUppercase.bind(this) },
    { text: 'PASSWORD.ONE_NUMBRIC', isMet: this.hasNumeric.bind(this) },
    { text: 'PASSWORD.ONE_SYMBOL', isMet: this.symbol.bind(this) },
    { text: 'PASSWORD.8_CHARACTERS', isMet: this.hasMinLength.bind(this) }
  ]
  public formGroupKey: any;

  private get password() {
    return this.formGroupKey?.value || '';
  }

  private hasLowercase() {
    return /[a-z]/.test(this.password);
  }

  private hasUppercase() {
    return /[A-Z]/.test(this.password);
  }

  private hasNumeric() {
    return /[0-9]/.test(this.password);
  }
  private symbol() {
    return /[@$!%*?&#]/.test(this.password);
  }

  private hasMinLength() {
    return this.password.length >= 8;
  }
}

import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private formGroup!: FormGroup;

  constructor(private httpClient: HttpClient,private CookieService:CookieService ,private fb: FormBuilder) {
    if(this.CookieService.get('access_token')){
      this.initForm()
    }

  }

  public initForm() {
    const theme = localStorage.getItem('theme');
    const language = localStorage.getItem('language');
    this.formGroup = this.fb.group({
      sys_info: this.fb.group({
        theme: [theme],
        language: [language],
      }),
    })
  }

  public setFormGroupValue(key: string, value: any): void {
    this.formGroup.get(`sys_info.${key}`)?.setValue(value);
  }

  public getFormGroupValue(): any {
    return this.formGroup.value;
  }

  public addUserData(data: any): Observable<any> {
    return this.httpClient.patch<any>(`users/v1/sys-info/`, data)
  }


}

import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  currentLanguage: string | undefined;
  constructor(
    public translate: TranslateService,
    private Location: Location,
    private messageService: MessageService
  ) {
    this.initializeLanguageSettings();
  }


  private initializeLanguageSettings() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'ar') {
      document.documentElement.classList.add('arabic');
      document.documentElement.classList.remove('english');
      document.documentElement.dir = "rtl";
      this.currentLanguage = 'ar';
    } else {
      document.documentElement.classList.add('english');
      document.documentElement.classList.remove('arabic');
      document.documentElement.dir = "ltr";
      this.currentLanguage = 'en';
    }
    this.translate.use(this.currentLanguage);
  }

  public setLanguage(language: any) {
    localStorage.setItem('language', language);
    this.translate?.use(language);
    this.currentLanguage = language;
    if (localStorage.getItem('language') === 'ar') {
      document.documentElement.classList.add('arabic');
      document.documentElement.classList.remove('english');
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.classList.add('english');
      document.documentElement.classList.remove('arabic');
      document.documentElement.dir = "ltr";
    }
  }

  public throwMessage(name: any, action: string) {
    let msg = ''
    if (action === 'error') {
      msg = this.currentLanguage === 'ar' ? 'لم يتم العثور على المستخدم' : 'User not found';
      this.messageService.add({ severity: 'error', summary: msg, detail: name });
    } else {
      if (action === 'post') {
        msg = this.currentLanguage === 'ar' ? 'تم إنشاؤه بنجاح' : 'Created successfully'
      } else if (action === 'patch') {
        msg = this.currentLanguage === 'ar' ? 'تم التعديل بنجاح' : 'Edited successfully'
      } else if (action === 'delete') {
        msg = this.currentLanguage === 'ar' ? 'تم الحذف بنجاح' : 'Deleted successfully'
      }
      this.messageService.add({ severity: 'success', summary: msg, detail: name });
    }
  }

  backClicked() {
    this.Location.back();
  }

}

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { CUSTOM_ELEMENTS_SCHEMA, inject, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModulesModule } from './modules/modules.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { GlobalFunctionsService } from './core/services/global-functions.service';
import { AuthService } from './core/auth/services/auth.service';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModulesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ToastModule
  ],
  providers: [
    GlobalFunctionsService,
    DialogService,
    AuthService,
    MessageService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

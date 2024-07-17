import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-title-breadcrumbs',
  templateUrl: './title-breadcrumbs.component.html',
  styleUrl: './title-breadcrumbs.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule,
    TranslateModule
  ]
})
export class TitleBreadcrumbsComponent {
  home = { icon: 'pi pi-home', routerLink: '/' };
  @Input() items!: MenuItem[];
  @Input() title!:string;


}

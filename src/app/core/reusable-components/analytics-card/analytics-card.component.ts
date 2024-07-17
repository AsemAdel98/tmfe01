import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    TranslateModule,
    InputSwitchModule,
    FormsModule
  ],
  templateUrl: './analytics-card.component.html',
  styleUrl: './analytics-card.component.scss'
})
export class AnalyticsCardComponent {
  @Input() analyticsArray!: analyticsArray;
  isAnalyticsShown: boolean = true;

  showHideAnalytics() {
    this.isAnalyticsShown = !this.isAnalyticsShown
  }
  }

  export interface analyticsArray {
    size:number;
    data: {
      background_color?: string;
      color?: string;
      icon?: string;
      name: string;
      value: number;
    }[];
  }

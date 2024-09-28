import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  CircleProgressComponent,
  NgCircleProgressModule,
} from 'ng-circle-progress';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgCircleProgressModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardContentComponent {
  @Input() request: any;
  @Input() showProgress: boolean = true;
}

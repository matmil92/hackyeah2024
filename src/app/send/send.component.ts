import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CardContentComponent } from '../card-content/card-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    CardContentComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgCircleProgressModule,
    CommonModule,
  ],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss',
})
export class SendComponent implements OnInit, AfterViewInit {
  public request: any;
  public shouldAnimate: boolean = false;

  public get progress(): number {
    return this.request?.progress <= 100 ? this.request.progress : 100;
  }
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.route.params.subscribe((data) => console.log(data));
  }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => {
        this.request = res.request;
      });
  }

  public ngAfterViewInit(): void {
    this.shouldAnimate = false;
  }

  public addEnergy(): void {
    this.request.progress = this.request.progress + 1;
  }
}

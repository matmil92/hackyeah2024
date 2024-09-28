import { Component } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { CardContentComponent } from '../card-content/card-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CardContentComponent, MatCardModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {
  public requests: any[] = [
    {
      id: 0,
      title: 'Adrian potrzebuje pozytywnej energii',
      description: 'Zaspałem do pracy :(',
      progress: 89,
      limit: 100,
    },
    {
      id: 1,
      title: 'Bartek potrzebuje pozytywnej energii',
      description: 'Muszę naprawić grupki',
      progress: 78,
      limit: 100,
    },
    {
      id: 2,
      title: 'Mateusz potrzebuje pozytywnej energii',
      description: 'Pada na dworze',
      progress: 45,
      limit: 100,
    },
  ];

  constructor(private router: Router) {}

  public redirect(request: any): void {
    console.log(1321);
    this.router.navigateByUrl(`requests/${request.id}`, { state: { request } });
  }
}

import { Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { SendComponent } from './send/send.component';

export const routes: Routes = [
  { path: 'requests', component: RequestsComponent },
  { path: 'requests/:id', component: SendComponent },
];

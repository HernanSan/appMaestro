import { Routes } from '@angular/router';

import { ChartsComponent } from './grade-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    data: {
      title: 'Charts'
    }
  }
];

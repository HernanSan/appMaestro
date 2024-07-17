import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./nombre-del-componente.component').then(m => m.NombreDelComponente),
    data: {
      title: $localize`nombre-del-componente`
    }
  }
];


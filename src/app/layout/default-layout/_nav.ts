import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    title: true,
    name: 'Registro'
  },
  {
    name: 'Registar Estudiantes',
    iconComponent: { name: 'cil-notes' },
    url: '/charts'
  },
  {
    name: 'Registrar Notas',
    url: '/widgets',
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'comp',
    url: '/nombre-del-componente.component',
    iconComponent: { name: 'cil-pencil' }
  }
];

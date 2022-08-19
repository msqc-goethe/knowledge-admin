import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'VIEWER',
    icon: 'bar-chart-outline',
    group: true,
  },
  {
    title: 'IOR',
    icon: 'checkmark-square-outline',
    children: [
      {
        title: 'Single Result',
        link: '/pages/result_viewer',
      },
      {
        title: 'Result Comparison',
        link: '/pages/result_comparison',
      },
      {
        title: 'Parameter Space Exploration',
        link: '/pages/ior-builder',
      },
    ],
  },
  {
    title: 'IO500',
    icon: 'cube-outline',
    children: [
      {
        title: 'Single Result',
        link: '/pages/io500',
      },
      {
        title: 'Result Comparison',
        link: '/pages/io500-comp',
      },
    ],
  },
  {
    title: 'Darshan',
    icon: 'compass-outline',
    children: [
      {
        title: 'Single Result',
        link: '/pages/darshan_result_viewer',
      },
      {
        title: 'Result Comparison',
        link: '/pages/darshan-result_comparison',
      },
    ],
  },
  {
    title: 'HACCIO',
    icon: 'checkmark-square-outline',
    children: [
      {
        title: 'Single Result',
        link: '/pages/custom',
      },
      {
        title: 'Result Comparison',
        link: '/pages/custom-comp',
      },
    ],
  },
  {
    title: 'Custom Input',
    icon: 'layout-outline',
    children: [
      {
        title: 'Input Defination',
        link: '/pages/new_experiment',
      },
    ],
  },  
  {
    title: 'ADVANCED FEATURES',
    icon: 'eye-outline',
    group: true,
  },
  {
    title: 'System Dashboard',
    icon: 'options-2-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Slurm Dashboard',
    icon: 'monitor-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Optimization Recommandation',
    icon: 'bulb-outline',
    link:'/pages/optimization',
    home: true
  },
  {
    title: 'Use Local Data',
    icon: 'log-in-outline',
    link: '/pages/local_data',
    home: true
  },
/*
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  }
  */
];

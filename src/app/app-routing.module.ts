import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { CustomComparisonComponent } from './IO/custom-comparison/custom-comparison.component';
import { CustomSingleComponent } from './IO/custom-single/custom-single.component';
import { DarshanComparisonComponent } from './IO/darshan-comparison/darshan-comparison.component';
import { DarshanSingleComponent } from './IO/darshan-single/darshan-single.component';
import { Io500ComparisonComponent } from './IO/io500-comparison/io500-comparison.component';
import { Io500IorComparisonComponent } from './IO/io500-ior-comparison/io500-ior-comparison.component';
import { Io500SingleComponent } from './IO/io500-single/io500-single.component';
import { IorBuilderComponent } from './IO/ior-builder/ior-builder.component';
import { IorComparisonComponent } from './IO/ior-comparison/ior-comparison.component';
import { IorSingleComponent } from './IO/ior-single/ior-single.component';
import { KnowledgeDashboardComponent } from './IO/knowledge-dashboard/knowledge-dashboard.component';
import { LocalDataComponent } from './Misc/local-data/local-data.component';
import { NewExperienceComponent } from './Misc/new-experience/new-experience.component';
import { OptimizationComponent } from './Misc/optimization/optimization.component';
import { PerformanceBoundingboxComponent } from './IO/performance-boundingbox/performance-boundingbox.component';
import { SlurmDashboardComponent } from './System/slurm-dashboard/slurm-dashboard.component';

const routes: Routes = [
  { path: 'io_dashboard', component: KnowledgeDashboardComponent },
  { path: 'ior_single', component: IorSingleComponent},
  { path: 'ior_comparison', component: IorComparisonComponent},
  { path: 'io500_single', component: Io500SingleComponent},
  { path: 'io500_comparison', component: Io500ComparisonComponent},
  { path: 'darshan_single', component: DarshanSingleComponent},
  { path: 'darshan_comparison', component: DarshanComparisonComponent},
  { path: 'custom_single', component: CustomSingleComponent},
  { path: 'custom_comparison', component: CustomComparisonComponent},
  { path: 'ior_builder', component: IorBuilderComponent},
  { path: 'io500_ior_comparison', component: Io500IorComparisonComponent},
  { path: 'performance_boundingbox', component: PerformanceBoundingboxComponent},
  { path: 'slurm_dashboard', component: SlurmDashboardComponent},
  { path: 'optimization', component: OptimizationComponent},
  { path: 'local_data', component: LocalDataComponent},
  { path: 'new_experience', component: NewExperienceComponent}
];



export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'I/O Performance',
    icon: 'bar-chart-outline',
    group: true,
  },
  {
    title: 'Overview',
    icon: 'checkmark-square-outline',
    link: 'io_dashboard'
  },
  {
    title: 'IOR',
    icon: 'checkmark-square-outline',
    children: [
      {
        title: 'Single Result',
        link: 'ior_single', //done
      },
      {
        title: 'Result Comparison',
        link: 'ior_comparison',//done
      },
      {
        title: 'Parameter Space Exploration',
        link: 'ior_builder',
      },
    ],
  },
  {
    title: 'IO500',
    icon: 'cube-outline',
    children: [
      {
        title: 'Single Result',
        link: 'io500_single', //done
      },
      {
        title: 'Result Comparison',
        link: 'io500_comparison',
      },
      {
        title: 'IOR Comparison',
        link: 'io500_ior_comparison',
      },
      {
        title: 'Performance Boundingbox',
        link: 'performance_boundingbox',
      },
    ],
  },
  {
    title: 'Darshan',
    icon: 'compass-outline',
    children: [
      {
        title: 'Single Result',
        link: 'darshan_single',//done
      },
      {
        title: 'Result Comparison',
        link: 'darshan_comparison',
      },
    ],
  },
  {
    title: 'HACCIO',
    icon: 'checkmark-square-outline',
    children: [
      {
        title: 'Single Result',
        link: 'custom_single',
      },
      {
        title: 'Result Comparison',
        link: 'custom_comparison',
      },
    ],
  },
  {
    title: 'Custom Input',
    icon: 'layout-outline',
    children: [
      {
        title: 'New Experience',
        link: 'new_experience',
      },
    ],
  },  
  {
    title: 'Network Performance',
    icon: 'bar-chart-outline',
    group: true,
  },

  {
    title: 'System Performance',
    icon: 'eye-outline',
    group: true,
  },
  {
    title: 'System Dashboard',
    icon: 'options-2-outline',
    link: 'dashboard',
    home: true,
  },
  {
    title: 'Slurm Dashboard',
    icon: 'monitor-outline',
    link: 'slurm_dashboard',
    home: true,
  },
  {
    title: 'Optimization ',
    icon: 'bulb-outline',
    link:'optimization',
    home: true
  },
  {
    title: 'Local Data',
    icon: 'log-in-outline',
    link: 'local_data',
    home: true
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

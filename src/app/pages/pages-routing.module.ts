import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ECommerceComponent} from './e-commerce/e-commerce.component'
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultViewerComponent } from './result-viewer/resultviewer.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ResultComparisonComponent } from './result-comp/result-comparison.component';
import { NewExperimentComponent } from './new-experiment/newexperiment.component';
import { IO500Component } from './io500/io500.component';
import { OptimizationComponent } from './opt-recom/optimization.component';
import { LocalDataComponent } from './local-data/localdata.component';
import {DashboardExComponent} from './dashboard-ex/dashboard-ex.component';
import {DarshanResultViewerComponent} from './darshan-viewer/darshan-viewer.component';
import {DarshanResultComparisonComponent} from './darshan-result-comp/darshan-result-comparison.component';
import {IorBuilderComponent} from './ior-builder/ior-builder.component';
import {IO500CompComponent} from './io500-comp/io500-comp.component';
import {CustomComponent} from './custom/custom.component';
import {CustomCompComponent} from './custom-comp/custom-comp.component';
import { BenchCompComponent } from './bench-comp/bench-comp.component';
import {Io500IorCompComponent} from './io500-ior-comp/io500-ior-comp.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard-ex',
      component: DashboardExComponent,
    },

    {
      path: 'result_viewer',
      component: ResultViewerComponent,
    },

    {
      path: 'ior-builder',
      component: IorBuilderComponent,
    },
    {
      path: 'darshan_result_viewer',
      component: DarshanResultViewerComponent,
    },
    {
      path: 'result_comparison',
      component: ResultComparisonComponent,
    },
    {
      path: 'darshan-result_comparison',
      component: DarshanResultComparisonComponent,
    },

    {
      path: 'io500',
      component: IO500Component,
    },
    {
      path: 'io500-comp',
      component: IO500CompComponent,
    },
    {
      path: 'io500-ior-comp',
      component: Io500IorCompComponent,
    },
    {
      path: 'bench-comp',
      component: BenchCompComponent,
    },
    {
      path: 'custom',
      component: CustomComponent,
    },
    {
      path: 'custom-comp',
      component: CustomCompComponent,
    },


    {
      path: 'optimization',
      component: OptimizationComponent,
    },
    {
      path: 'new_experiment',
      component: NewExperimentComponent,
    },
    {
      path: 'local_data',
      component: LocalDataComponent,
    },
    {
      path: 'dashboard',
      component: DashboardExComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard-ex/',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

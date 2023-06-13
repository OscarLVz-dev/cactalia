import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CommingSoonComponent } from './components/commons/comming-soon/comming-soon.component';
import { CatalogPinesComponent } from './components/pages/catalog-pines/catalog-pines.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pines', component: CatalogPinesComponent },
  { path: 'proximamente', component: CommingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
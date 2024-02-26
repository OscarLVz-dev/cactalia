import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CommingSoonComponent } from './components/commons/comming-soon/comming-soon.component';
import { CatalogPinesComponent } from './components/pages/catalog-pines/catalog-pines.component';
import { CatalogAccesoriesComponent } from './components/pages/catalog-accesories/catalog-accesories.component';
import { ClothingAvailableComponent } from './components/pages/clothing-available/clothing-available.component';
import { CatalogFundasComponent } from './components/pages/catalog-fundas/catalog-fundas.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pines', component: CatalogPinesComponent },
  { path: 'accesorios', component: CatalogAccesoriesComponent },
  { path: 'ropa-disponible', component: ClothingAvailableComponent },
  { path: 'fundas', component: CatalogFundasComponent },
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
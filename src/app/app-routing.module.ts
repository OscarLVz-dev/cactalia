import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CommingSoonComponent } from './components/commons/comming-soon/comming-soon.component';
import { ClothingAvailableComponent } from './components/pages/clothing-available/clothing-available.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { Catalog } from './constants/Catalog';

const routes: Routes = [
  { path: '', component: MainComponent },
  
  //Catalogs
  { path: Catalog.pines.displayName,        component: CatalogComponent },
  { path: Catalog.accesorios.displayName,   component: CatalogComponent },
  { path: Catalog.fundas.displayName,        component: CatalogComponent },

  //Instagram
  { path: 'ropa-disponible', component: ClothingAvailableComponent },

  //Others
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
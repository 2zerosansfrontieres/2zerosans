import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NousComponent } from './nous/nous.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { MembreComponent } from './membre/membre.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'nous', component: NousComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'membres', component: MembreComponent },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }

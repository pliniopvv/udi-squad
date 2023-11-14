import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoggedComponent } from './logged.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PageEditComplementsComponent } from './pages/pageeditcomplements/pageeditcomplements.component';

const routes: Routes = [
  { path: '', component: LoggedComponent, children: [
    { path: 'perfil', component: PageHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'postar', component: PagePostComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'editComplements', component: PageEditComplementsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }

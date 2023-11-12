import { LoggedModule } from './logged/logged.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './logoff/login/login.component';
import { CadastrarComponent } from './logoff/cadastrar/cadastrar.component';
import { AuthGuard } from './logged/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'on', loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule), canActivate: [AuthGuard] },
  { path: 'cadastrar', component: CadastrarComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

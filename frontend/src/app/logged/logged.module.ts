import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoggedComponent } from './logged.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertpanelComponent } from './components/alertpanel/alertpanel.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { FeedlineComponent } from './components/feedline/feedline.component';
import { FeedcardComponent } from './components/feedcard/feedcard.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PosteditComponent } from './components/postedit/postedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditcomplementsComponent } from './components/editcomplements/editcomplements.component';
import { PageEditComplementsComponent } from './pages/pageeditcomplements/pageeditcomplements.component';


@NgModule({
  declarations: [
    PerfilComponent,
    LoggedComponent,
    NavbarComponent,
    AlertpanelComponent,
    PageHomeComponent,
    FeedlineComponent,
    FeedcardComponent,
    PagePostComponent,
    PosteditComponent,
    EditcomplementsComponent,
    PageEditComplementsComponent,
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class LoggedModule { }

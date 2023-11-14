import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Feedcard } from 'src/app/model/feedcard';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, AfterViewInit {

  user: User;
  listcards: Feedcard[] = null;
  listalerts: Alert[] = null;

  constructor(
      private alertService: AlertService,
      private feedService: FeedService,
      private auth: AuthenticationService
     ) { }

  ngAfterViewInit(): void {
    this.alertService.findAll().then((alerts: Alert[]) => {
      this.listalerts = alerts;
    });
    this.feedService.findAll().then((feeds: Feedcard[]) => {
      this.listcards = feeds;
    });
    this.auth.me().then(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
  }

}

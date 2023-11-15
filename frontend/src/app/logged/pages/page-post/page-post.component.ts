import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { Feedcard } from 'src/app/model/feedcard';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {

  user: User;
  listcards: Feedcard[] = null;
  listalerts: Alert[] = null;

  constructor(
    private auth: AuthenticationService,
    private alertService: AlertService,
    private feedService: FeedService
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
    });
  }

  ngOnInit(): void {
  }

  receivePost(feedcard: Feedcard) {
    this.listcards.unshift(feedcard);
  }

}

import { AuthenticationService } from 'src/app/service/authentication.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Feedcard } from 'src/app/model/feedcard';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.scss']
})
export class PosteditComponent implements OnInit {

  @Output() onPost = new EventEmitter<Feedcard>();

  // display erros
  falha_em_postar: boolean = false;

  postagem: FormControl = new FormControl('');

  constructor(
    private auth: AuthenticationService,
    private feedService: FeedService
    ) { }

  ngOnInit(): void {
  }

  async postar() {
    let feedcard = new Feedcard();
    feedcard.body = this.postagem.value;
    feedcard.user = await this.auth.me();

    this.postagem.setValue("");
    this.feedService.create(feedcard).then((postado: Feedcard) => {
      this.onPost.emit(postado);
    }).catch(e => {
      this.falha_em_postar = true;
      this.postagem.setValue(feedcard.body);
    });
  }

}

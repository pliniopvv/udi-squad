import { Component, Input, OnInit } from '@angular/core';
import { Feedcard } from 'src/app/model/feedcard';

@Component({
  selector: 'app-feedcard',
  templateUrl: './feedcard.component.html',
  styleUrls: ['./feedcard.component.scss']
})
export class FeedcardComponent implements OnInit {

  @Input('card')
  card: Feedcard;

  constructor() { }

  ngOnInit(): void {
  }

  setCard(card: Feedcard) {
    this.card = card;
  }

}

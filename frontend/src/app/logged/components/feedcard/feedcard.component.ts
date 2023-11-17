import { Component, Input, OnInit } from '@angular/core';
import { Feedcard } from 'src/app/model/feedcard';

@Component({
  selector: 'app-feedcard',
  templateUrl: './feedcard.component.html',
  styleUrls: ['./feedcard.component.scss'],
})
export class FeedcardComponent implements OnInit {
  @Input('card')
  card: Feedcard;

  constructor() {}

  ngOnInit(): void {}

  setCard(card: Feedcard) {
    this.card = card;
  }

  fenter(body: String) {
    if (body.indexOf('<script>') > 0 || body.indexOf('</script>') > 0)
      return 'Favor evitar utilizar as tags html <script></script>.';

      //@ts-ignore
    return body.replaceAll('\n', '<br />');
  }
}

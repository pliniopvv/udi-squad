import { Component, Input, OnInit } from '@angular/core';
import { Feedcard } from 'src/app/model/feedcard';

@Component({
  selector: 'app-feedline',
  templateUrl: './feedline.component.html',
  styleUrls: ['./feedline.component.scss']
})
export class FeedlineComponent implements OnInit {

  @Input('listcard')
  listCards: Feedcard[];

  constructor() { }

  ngOnInit(): void {
  }

}

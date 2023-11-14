import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/app/model/alert';

@Component({
  selector: 'app-alertpanel',
  templateUrl: './alertpanel.component.html',
  styleUrls: ['./alertpanel.component.scss']
})
export class AlertpanelComponent implements OnInit {

  @Input('listalert')
  listAlerts: Alert[];

  constructor() { }

  ngOnInit(): void {
  }

}

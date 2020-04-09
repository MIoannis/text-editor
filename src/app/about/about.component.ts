import { Component, OnInit } from '@angular/core';
import {SessionQuery} from '../AkitaStore/session.query';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  checkedValue: boolean;

  constructor(private sessionQuery: SessionQuery) { }

  ngOnInit(): void {
    this.sessionQuery.checkedValue$.subscribe(x => this.checkedValue = x);
  }
}

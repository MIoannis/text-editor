import { Component, OnInit } from '@angular/core';
import {SessionQuery} from '../AkitaStore/session.query';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  checked = false;

  constructor(private sessionQuery: SessionQuery) {
    this.sessionQuery.checkValue$.subscribe(x => this.checked = x);
  }

  ngOnInit(): void {
  }

}

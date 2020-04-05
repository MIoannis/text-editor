import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../AkitaStore/session.query';

@Component({
  selector: 'app-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.scss']
})
export class TextHandlerComponent implements OnInit {
  checked = false;

  constructor(private sessionQuery: SessionQuery) {
    this.sessionQuery.checkValue$.subscribe(x => this.checked = x);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../AkitaStore/session.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.scss']
})
export class TextHandlerComponent implements OnInit {
  checkValue$: Observable<boolean>;

  constructor(private sessionQuery: SessionQuery) {
    this.checkValue$ = this.sessionQuery.checkValue$;
    this.sessionQuery.checkValue$.subscribe(x => this.checkValue$ = x);
  }

  ngOnInit(): void {
  }

}

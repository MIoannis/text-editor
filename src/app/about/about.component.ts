import { Component, OnInit } from '@angular/core';
import {SessionQuery} from '../AkitaStore/session.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  checkValue$: Observable<boolean>;

  constructor(private sessionQuery: SessionQuery) {
    this.checkValue$ = this.sessionQuery.checkValue$;
    this.sessionQuery.checkValue$.subscribe(x => this.checkValue$ = x);
  }

  ngOnInit(): void {
  }

}

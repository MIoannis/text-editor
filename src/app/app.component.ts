import {Component, OnInit} from '@angular/core';
import {SessionQuery} from './AkitaStore/session.query';
import {SessionService} from './AkitaStore/session.service';
import {Observable} from 'rxjs';

import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faPalette} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faPalette = faPalette;
  faCog = faCog;
  checkValue$: Observable<boolean>;

  constructor(private sessionQuery: SessionQuery,
              private sessionService: SessionService) {
    this.checkValue$ = this.sessionQuery.checkValue$;
    this.sessionQuery.checkValue$.subscribe(x => this.checkValue$ = x);
  }

  ngOnInit(): void {
  }
  eventCheck(status) {
    this.sessionService.update(status.checked);
  }
}

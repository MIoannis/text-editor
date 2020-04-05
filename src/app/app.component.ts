import {Component, OnInit} from '@angular/core';
import {SessionQuery} from './AkitaStore/session.query';
import {SessionService} from './AkitaStore/session.service';

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
  checked = false;

  constructor(private sessionQuery: SessionQuery,
              private sessionService: SessionService) {
    this.sessionQuery.checkValue$.subscribe(x => this.checked = x);
  }

  ngOnInit(): void {
  }
  eventCheck(status) {
    this.sessionService.update(status.checked);
  }
}

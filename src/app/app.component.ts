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
  checkValue: boolean;

  constructor(private sessionQuery: SessionQuery,
              private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionQuery.checkedValue$.subscribe(x => this.checkValue = x);
  }

  eventCheck(status) {
    this.sessionService.updateCheckValue(status.checked);
  }
}

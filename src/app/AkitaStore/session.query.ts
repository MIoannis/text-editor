import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  checkValue$ = this.select(store => store.checked);

  constructor(protected store: SessionStore) {
    super(store);
  }

}

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  checkedValue$ = this.select(store => store.checked);
  italicValue$ = this.select(store => store.italic);
  boldValue$ = this.select(store => store.bold);
  underlineValue$ = this.select('underline');
  selectFont$ = this.select('font');
  selectColor$ = this.select('color');

  constructor(protected store: SessionStore) {
    super(store);
  }

}

import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore) {
  }

  update(checked: boolean) {
    this.sessionStore.update({checked});
  }
}

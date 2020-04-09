import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore) {
  }

  updateCheckValue(checked: boolean) {
    this.sessionStore.update({checked});
  }

  updateFont(font: string) {
    this.sessionStore.update({font});
  }

  updateColor(color: string) {
    this.sessionStore.update({color});
  }

  updateStateBold(bold: string) {
    this.sessionStore.update({bold});
  }

  updateStateItalic(italic: string) {
    this.sessionStore.update({italic});
  }

  updateStateUnderline(underline: string) {
    this.sessionStore.update({underline});
  }

  updateText(text: string) {
    this.sessionStore.update({text});
  }
}

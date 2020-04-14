import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore) {
  }

  updateCheckValue(checked: boolean) {
    this.sessionStore.update({checked});
  }

  updateStateBold(bold: string) {
    this.sessionStore.update({bold});
  }

  updateStateItalic(italic: string) {
    this.sessionStore.update({italic});
  }

  updateStateUnderline(underline: boolean) {
    this.sessionStore.update({underline});
  }

  updateFont(font: string) {
    this.sessionStore.update({font});
  }

  updateFontSize(fontsize: string) {
    this.sessionStore.update({fontsize});
  }

  updateColor(color: string) {
    this.sessionStore.update({color});
  }
}

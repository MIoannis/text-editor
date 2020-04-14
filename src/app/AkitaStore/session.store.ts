import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  checked: boolean;
  underline: boolean;
  bold: string;
  italic: string;
  color: string;
  font: string;
  fontsize: string;
}

export function createInitialState(): SessionState {
  return {
    checked: false,
    underline: false,
    bold: null,
    italic: null,
    color: 'Black',
    font: 'Times New Roman',
    fontsize: '1em',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }
}

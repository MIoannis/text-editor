import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  checked: boolean;
  underline: boolean;
  bold: string;
  italic: string;
  color: string;
  font: string;
  fontsize: number;
}

export function createInitialState(): SessionState {
  return {
    checked: false,
    underline: false,
    bold: null,
    italic: null,
    color: null,
    font: null,
    fontsize: 6,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }
}

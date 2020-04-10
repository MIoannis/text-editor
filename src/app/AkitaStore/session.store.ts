import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  checked: boolean;
  bold: string;
  italic: string;
  underline: boolean;
  color: string;
  font: string;
  text: string;
}

export function createInitialState(): SessionState {
  return {
    checked: false,
    bold: '',
    italic: '',
    underline: false,
    color: '',
    font: '',
    text: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }
}

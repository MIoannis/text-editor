import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
   checked: boolean;
   bold: string;
   italic: string;
   underline: string;
   color: string;
   font: string;
   text: string;
}

export function createInitialState(): SessionState {
  return {
    checked: false,
    bold: '',
    italic: '',
    underline: '',
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


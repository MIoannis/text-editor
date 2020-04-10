import {Component, OnInit} from '@angular/core';
import { SessionQuery } from '../AkitaStore/session.query';
import { SessionService} from '../AkitaStore/session.service';

@Component({
  selector: 'app-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.scss']
})
export class TextHandlerComponent implements OnInit {
  contenteditable = true;
  font: string;
  color: string;
  checkedValue: boolean;
  italic: string;
  bold: string;
  underline: string;
  el: HTMLElement;

  constructor(private sessionQuery: SessionQuery,
              private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionQuery.selectColor$.subscribe(x => this.color = x);
    this.sessionQuery.contenteditableCheckValue$.subscribe(x => this.contenteditable = x);
    this.sessionQuery.selectFont$.subscribe(x => this.font = x);
    this.sessionQuery.checkedValue$.subscribe(x => this.checkedValue = x);
    this.sessionQuery.italicValue$.subscribe(x => this.italic = x);
    this.sessionQuery.boldValue$.subscribe(x => this.bold = x);
    this.sessionQuery.underlineValue$.subscribe(x => this.underline = x);
  }

  contenteditableChangeValue(): boolean {
    return this.contenteditable = false;
  }

  copyToClipboard() {
    this.el = document.getElementById('textarea');
    document.execCommand('selectAll');
    document.execCommand('copy');
  }

  boldEvent(status) {
    if (this.bold === 'bold') {
      this.bold = '';
    } else {
      this.bold = 'bold';
    }
    this.sessionService.updateStateBold(status.bold);
  }

  italicEvent(status) {
    if (this.italic === 'italic') {
      this.italic = '';
    } else {
      this.italic = 'italic';
    }
    this.sessionService.updateStateItalic(status.italic);
  }
}

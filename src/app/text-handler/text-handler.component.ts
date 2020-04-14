import {Component, OnInit} from '@angular/core';
import { SessionQuery } from '../AkitaStore/session.query';
import { SessionService} from '../AkitaStore/session.service';

@Component({
  selector: 'app-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.scss']
})
export class TextHandlerComponent implements OnInit {
  font: string;
  fontsize: string;
  color: string;
  italic: string;
  bold: string;
  underline: boolean;
  el: HTMLElement;
  printphrase = 'Print text...';

  fonts = ['Times New Roman', 'Segoi UI', 'Robotica'];
  fontsizelist = [1, 2, 3, 4, 5, 6];

  constructor(private sessionQuery: SessionQuery,
              private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionQuery.selectFontSize$.subscribe(x => this.fontsize = x);
    this.sessionQuery.selectColor$.subscribe(x => this.color = x);
    this.sessionQuery.selectFont$.subscribe(x => this.font = x);
    this.sessionQuery.italicValue$.subscribe(x => this.italic = x);
    this.sessionQuery.boldValue$.subscribe(x => this.bold = x);
    this.sessionQuery.underlineValue$.subscribe(x => this.underline = x);
  }

  /**selectFont() {
    this.sessionService.updateFont(this.font);
  } */

  printChangeValue(): string {
    return this.printphrase = '';
  }

  copyToClipboard() {
    this.el = document.getElementById('textarea');
    document.execCommand('selectAll');
    document.execCommand('copy');
  }

  boldEvent() {
    if (this.bold === 'bold') {
      this.bold = null;
    } else {this.bold = 'bold'; }
    this.sessionService.updateStateBold(this.bold);
  }

  italicEvent() {
    if (this.italic === 'italic') {
      this.italic = null;
    } else {this.italic = 'italic'; }
    this.sessionService.updateStateItalic(this.italic);
  }

  underlineEvent() {
    this.underline = this.underline === false;
    this.sessionService.updateStateUnderline(this.underline);
  }
}

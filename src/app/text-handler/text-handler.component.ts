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
  printphrase = 'Print text...';
  fonts = ['Times New Roman', 'Arial', 'Georgia'];
  fontsizelist = ['1em', '2em', '3em', '4em', '5em', '6em'];

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

  lengthCheck() {
    if (document.getElementById('color-input-color').textContent.length > 7) {
      document.getElementById('color-input-color').textContent = document.getElementById('color-input-color').textContent.slice(0, -1);
    }
  }

  dynamicSubmitColor() {
    this.color = document.getElementById('color-input-color').textContent;
    this.sessionService.updateColor(this.color);
  }

  selectSize(event) {
    this.fontsize = event.target.value;
    this.sessionService.updateFontSize(this.fontsize);
  }

  selectFont(event) {
    this.font = event.target.value;
    this.sessionService.updateFont(this.font);
  }

  printChangeValue(): string {
    return this.printphrase = '';
  }

  copyToClipboard() {
    document.getElementById('textarea');
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

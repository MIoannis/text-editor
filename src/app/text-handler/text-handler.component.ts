import {Component, OnInit} from '@angular/core';
import { SessionQuery } from '../AkitaStore/session.query';
import { SessionService} from '../AkitaStore/session.service';

@Component({
  selector: 'app-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.scss']
})
export class TextHandlerComponent implements OnInit {
  text = true;
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
    this.sessionQuery.selectFont$.subscribe(x => this.font = x);
    this.sessionQuery.checkedValue$.subscribe(x => this.checkedValue = x);
    this.sessionQuery.italicValue$.subscribe(x => this.italic = x);
    this.sessionQuery.boldValue$.subscribe(x => this.bold = x);
    this.sessionQuery.underlineValue$.subscribe(x => this.underline = x);
  }

  textKek(): boolean {
    return  this.text = false;
  }

  copyToClipboard() {
    this.el = document.getElementById('textarea');
    this.el.setAttribute('contenteditable', 'true');
    document.execCommand('selectAll');
    document.execCommand('copy');
    this.el.setAttribute('contenteditable', 'false');
  }
}

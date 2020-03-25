import {Component, OnInit} from '@angular/core';

import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faPalette} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faPalette = faPalette;
  faCog = faCog;
  showFiller = false;
  checked = false;
  color = '';

  colorChange(color: string): string {
    this.color = color;
    if (this.checked) {
      return this.color = 'white';
    } else {
      return this.color = 'black';
    }
  }

  ngOnInit(): void {
  }
}

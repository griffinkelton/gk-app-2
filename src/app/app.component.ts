import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { contRatio } from './components/hexToRbg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'gk-app';
  fillColor = '#cc0000';

  @ViewChild(contRatio) input: ElementRef;
  child: string;

  ngAfterViewInit(): void {
    this.child = this.input['dataRatio'];
  }
}

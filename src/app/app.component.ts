import { Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /**implements AfterViewInit*/ {
  title = 'gk-app';
  fillColor='#cc0000';
  
/**@ViewChild('ratio') input: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.input)
  }
  */

}

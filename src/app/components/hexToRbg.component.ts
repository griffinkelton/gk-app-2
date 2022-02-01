import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

// declare the javascript function here
declare function calculateRatio(color1, color2): any;

@Component({
  selector: 'constrast-ratio',
  template: ` <div data-ratio="" style="display:none;" #ratio></div>`,
})
export class contRatio implements OnInit, AfterViewInit {
  @Input()
  fillColor?: string;

  textColor: string = '#ffffff';

  @ViewChild('ratio') input: ElementRef;
  dataRatio: number;

  ngOnInit() {
    calculateRatio(this.fillColor, this.textColor); // function call
  }

  ngAfterViewInit(): void {
    this.dataRatio = this.input.nativeElement.getAttribute('data-ratio');
    console.log(this.dataRatio);
  }
}

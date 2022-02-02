import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'storybook-funnel-bar',
  template: `
    <div class="funnel">
      <div class="funnel-title">{{ title }}</div>
      <div style="width:630px;">
        <div class="svg">
          <storybook-funnel-descender
            *ngIf="percentage < 100"
            [d0]="percentage / 100"
            [p0]="parentPercentage * 0.01 * 630"
            [flag]="flag"
          ></storybook-funnel-descender>
        </div>
        <div
          style="width: calc({{ percentage }}*0.01*630px);"
          [ngClass]="[cssClass]"
          [ngStyle]="{ color: flag ? 'var(--colorA)' : 'var(--colorB)' }"
          id="{{ id }}"
        >
          {{ amount | number: '1.0' }}
        </div>
      </div>
      <div class="funnel-percentage">{{ percentage | number: '1.2-2' }}%</div>
    </div>
  `,
  styleUrls: ['./funnel-bar.css'],
})
export class sbFunnelBar implements OnInit {
  @Input()
  cssClass?: string;

  @Input()
  fillColor?: string;

  @Input()
  title?: string;

  @Input()
  amount?: number;

  @Input()
  percentage: number;

  @Input()
  parentPercentage: number;

  @Input()
  id?: string;

  constructor(private elRef: ElementRef) {}

  child: any;
  child2: any;
  child3: any;
  child4: any;
  child5: number;

  flag: boolean;

  ngOnInit() {
    this.child = this.elRef.nativeElement.parentElement['firstChild'];
    this.child2 = this.child['firstChild'];
    this.child3 = this.child2['attributes'];
    this.child4 = this.child3['data-ratio'];
    this.child5 = this.child4['value'];

    if (this.child5 < 1 / 4.5) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { sbButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { sbHeaderComponent } from './components/header/header.component';
import { sbLineComponent } from './components/line/line.component';
import { sbFunnelBar } from './components/funnel-bar/funnel-bar.component';
import { sbFunnelDescender } from './components/funnel-descender/funnel-descender.component';
import { contRatio } from './components/hexToRbg.component';
import { sbPageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    sbButtonComponent,
    NavComponent,
    sbHeaderComponent,
    sbLineComponent,
    sbFunnelBar,
    sbFunnelDescender,
    contRatio,
    sbPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

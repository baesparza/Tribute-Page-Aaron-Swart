import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body.component';
import { HeaderComponent } from './components/header.component';
import { ImageComponent } from './components/img.component';
import { QuoteComponent } from './components/quote.component';
import { FooterComponent } from './components/footer.component';
import { VidComponent } from './components/vid.component';
import { InfoComponent } from './components/info.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    ImageComponent,
    QuoteComponent,
    FooterComponent,
    VidComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

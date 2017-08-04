import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { LoadJsonService } from './load-json.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [/*LoadJsonService*/],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

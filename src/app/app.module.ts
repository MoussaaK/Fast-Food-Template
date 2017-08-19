import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { LoadJsonService } from './load-json.service';
import { HttpModule } from '@angular/http';
import { PageComponent } from './page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';
import { CgvComponent } from './cgv/cgv.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CgvComponent,
    HomeComponent
  ],
  providers: [/*LoadJsonService*/],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash: false}),
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

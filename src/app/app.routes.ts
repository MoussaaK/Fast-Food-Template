import { Routes, RouterModule }            from '@angular/router';
import { ModuleWithProviders}              from "@angular/core";

import { PageComponent }                   from './page/page.component';
import { AppComponent }                    from './app.component';
import { CgvComponent }                    from './cgv/cgv.component';
import { HomeComponent }                    from './home/home.component';


export const ROUTES: Routes = [
  { path: '',                                 component: AppComponent },
  { path: 'home',                                 component: HomeComponent },
  { path: 'page/:cgv',                            component: CgvComponent },
  { path: 'page',                                 component: PageComponent }
];

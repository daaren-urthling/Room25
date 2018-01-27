import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { R25LayoutDirective, R25FlexDirective } from './directives/';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './shared/panel.component';
import { SetupComponent } from './setup/setup.component';
import { HeaderComponent } from './header/header.component';
import { FillerComponent } from './shared/filler.component';

import { UserService } from './services';

const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    R25LayoutDirective,
    R25FlexDirective,
    LoginComponent,
    PanelComponent,
    SetupComponent,
    HeaderComponent,
    FillerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

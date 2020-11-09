import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
>>>>>>> 912eb2a3a2273a032066b5843ea29567d6a9487e

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
>>>>>>> 912eb2a3a2273a032066b5843ea29567d6a9487e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

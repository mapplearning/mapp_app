import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentLoginComponent } from './student-login/student-login.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
<<<<<<< HEAD
import { AsteroidGamePageComponent } from './asteroid-game-page/asteroid-game-page.component';
import { FormsModule } from '@angular/forms';
=======
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
>>>>>>> 64d8a7bd144c553df28b3e1cba3e5386ca04b6c2


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    CreateNewAccountComponent,
    ForgotPasswordComponent,
    AsteroidGamePageComponent
    ContactPageComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

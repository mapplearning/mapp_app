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
import { AsteroidGamePageComponent } from './asteroid-game-page/asteroid-game-page.component';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AsteroidObjectComponent } from './asteroid-object/asteroid-object.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    CreateNewAccountComponent,
    ForgotPasswordComponent,
    AsteroidGamePageComponent,
    ContactPageComponent,
    HelpPageComponent,
    AsteroidObjectComponent,
    GameOverDialogComponent
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
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GameOverDialogComponent]
})
export class AppModule { }

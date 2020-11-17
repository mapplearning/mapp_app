import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AsteroidGamePageComponent } from './asteroid-game-page/asteroid-game-page.component';

const routes: Routes = [
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'create-account', component: CreateNewAccountComponent },
  { path: '' , component: WelcomePageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'help-page', component: HelpPageComponent },
  { path: 'asteroid-game-page', component: AsteroidGamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

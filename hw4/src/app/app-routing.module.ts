import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { HomeComponent } from './home/home.component';
import { LambdaInvokeComponent } from './modules/lambda-1-angular/components/lambda-invoke/lambda-invoke.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'survey',
    component: StudentSurveyComponent
  },
  {
    path: 'list',
    component: SurveyListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'lambda-invoke',
    component: LambdaInvokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, StudentSurveyComponent, SurveyListComponent];

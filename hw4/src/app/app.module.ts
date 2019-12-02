// Lambda import
import * as lambdaPostFunction from './modules/lambda-1-angular/lambda-1-angular.module';

// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 3rd party imports
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

// Component and Service imports
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SuccessComponent } from './success/success.component';
import { StudentSurveyService } from './student-survey/student-survey.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: StudentSurveyComponent },
  { path: 'list', component: SurveyListComponent },
  { path: 'success', component: SuccessComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    StudentSurveyComponent,
    SurveyListComponent,
    HomeComponent,
    routedComponents,
    SuccessComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    FormsModule,
    lambdaPostFunction.Lambda1AngularModule,
    ListboxModule,
    TableModule,
    TabViewModule,
    RadioButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentSurveyService], // add services here
  bootstrap: [AppComponent]
})
export class AppModule { }

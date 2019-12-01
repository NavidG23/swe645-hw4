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
import { TabViewModule } from 'primeng/tabview';

// Component imports
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: StudentSurveyComponent },
  { path: 'list', component: SurveyListComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    StudentSurveyComponent,
    SurveyListComponent,
    HomeComponent,
    routedComponents
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
    ListboxModule,
    TabViewModule,
    RadioButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [], // add services here
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { Form, NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Student } from '../shared/student.model';
import { Router } from '@angular/router';
import { StudentSurveyService } from './student-survey.service';

@Component({
  selector: 'app-student-survey',
  templateUrl: './student-survey.component.html',
  styleUrls: ['./student-survey.component.css']
})
export class StudentSurveyComponent implements OnInit {
  selectedLikedMost: string[] = [];
  selectedInterested: string;
  recommendationOptions: SelectItem[];
  selectedRecommendation: string;

  constructor(private router: Router, private studentSurveyService: StudentSurveyService) {
    this.recommendationOptions = [
      { label: 'Very Likely', value: 'VeryLikely' },
      { label: 'Likely', value: 'Likely' },
      { label: 'Unlikely', value: 'Unlikely' }
    ];
  }

  ngOnInit() {
  }

  onSubmit(surveyForm: NgForm) {
    // get value of the form
    const value = surveyForm.value;
    // extract all fields and put into model
    const newStudent = new Student( value.firstName,
                                    value.lastName,
                                    value.address,
                                    value.city,
                                    value.state,
                                    value.zip,
                                    value.phone,
                                    value.email,
                                    value.surveyDate,
                                    this.selectedLikedMost,
                                    this.selectedInterested,
                                    this.selectedRecommendation );
    // pass model to service
    if (surveyForm.valid) {
      console.log('Form Submitted!');
      this.studentSurveyService.saveSurvey(newStudent);
      console.log('Saved survey to db', newStudent);
      this.router.navigate(['/success']);
    }
  }

  clearForm(surveyForm: NgForm) {
    surveyForm.reset();
  }

}

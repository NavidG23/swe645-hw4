import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { Form, NgForm } from '@angular/forms';
import { SelectItem } from 'primeng/api';

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

  constructor() {
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
    // pass model to service

    if (surveyForm.valid) {
      console.log('Form Submitted!');
    }
  }

  clearForm(surveyForm: NgForm) {
    surveyForm.reset();
  }

}

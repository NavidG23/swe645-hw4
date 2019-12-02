import { Component, OnInit } from '@angular/core';
import { StudentSurveyService } from '../student-survey/student-survey.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  cols: any[];
  student1: Student = new Student(
    'Joe',
    'Buck',
    '3456 test drive',
    'Fairfax',
    'VA',
    '22030',
    '703-456-5667',
    'joe@yahoo.com',
    new Date('11/12/2019'),
    ['campus', 'students', 'location'],
    'friends',
    'Likely'
  );
  notionalData: Student[] = [];
  students: Student[] = this.notionalData; // TODO: initialize empty once lamda is tied in

  constructor(private studentSurveyService: StudentSurveyService) { }

  ngOnInit() {
    this.notionalData.push(this.student1);

    this.cols = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'zip', header: 'Zipcode' },
      { field: 'phone', header: 'Telephone Number' },
      { field: 'email', header: 'Email' },
      { field: 'surveyDate', header: 'Date Survey Completed' },
      { field: 'likedMost', header: 'Liked Most' },
      { field: 'selectedInterested', header: 'Interested' },
      { field: 'selectedRecommendation', header: 'Recommendation' }
    ];
  }

  // TODO: uncomment when lambda is set up
  /* getListOfStudents() {
    this.students = this.studentSurveyService.getAllSurveys();
  } */

}

import { Student } from '../shared/student.model';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
/* import {AwsLambdaService} from '../../../aws/service/lambda/aws-lambda.service'; */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class StudentSurveyService {
  getAllSurveys(): Student[] {
    // call lambda function API endpoint here and get student list
    return null;
  }

  public async saveSurvey(student: Student) {
    // call lambda function API endpoint here for post
  }
}

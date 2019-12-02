import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeTabSelected = false;
  surveyTabSelected = false;
  listTabSelected = false;

  constructor(private router: Router) { }

  handleChange(e) {
    const index = e.index;
    let link;
    switch (index) {
      case 0:
        link = ['/home'];
        break;
      case 1:
        link = ['/survey'];
        break;
      case 2:
        link = ['/list'];
        break;
    }
    this.router.navigate(link);
  }
}

export class Student {
  constructor(public firstName: string,
              public lastName: string,
              public address: string,
              public city: string,
              public state: string,
              public zip: string,
              public phone: string,
              public email: string,
              public surveyDate: Date,
              public likedMost: string[],
              public selectedInterested: string,
              public selectedRecommendation: string) {}
}

export class Subject {
    subject: string;
    course: string;
    credit: string;

  
    constructor(
        subject: string,
        course: string,
        credit: string,
    ) {
      this.subject = subject;
      this.course = course;
      this.credit = credit;
    }
  }
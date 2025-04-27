export class ScheduleClasses {
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;

  constructor(
    subject: string,
    date: Date,
    startTime: string,
    endTime: string,
  ) {
    this.subject = subject;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
  
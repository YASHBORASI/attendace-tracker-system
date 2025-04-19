export class Student {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  enrollmentNo: string;
  mobile: string;
  course: string;
  semester: string;
  role?:string;

  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string,
    enrollmentNo: string,
    mobile: string,
    course: string,
    semester: string,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.enrollmentNo = enrollmentNo;
    this.mobile = mobile;
    this.course = course;
    this.semester = semester;
    this.role = 'student';
  }
}
  
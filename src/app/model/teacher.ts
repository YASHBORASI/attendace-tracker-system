export class Teacher {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  department: string;
  mobile: string;
  designation: string;
  hireDate: Date;
  role?:string;

  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string,
    department: string,
    mobile: string,
    designation: string,
    hireDate: Date,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.department = department;
    this.mobile = mobile;
    this.designation = designation;
    this.hireDate = hireDate;
    this.role = 'teacher';
  }
}
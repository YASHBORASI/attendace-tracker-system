export class Course {
  name: string;
  code: string;
  description: string;
  semester: string;

  constructor(
    name: string,
    code: string,
    description: string,
    semester: string,
  ) {
    this.name = name;
    this.code = code;
    this.description = description;
    this.semester = semester;
  }
}
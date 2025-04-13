export class User {
    constructor(
      public username: string,
      public password: string,
      public role: 'student' | 'teacher' | 'admin'  // defining roles as a specific type
    ) {}
  }
export class User {
    constructor(
      public username: string,
      public password: string,
      public role: 'Student' | 'Teacher' | 'Admin'  // defining roles as a specific type
    ) {}
  }
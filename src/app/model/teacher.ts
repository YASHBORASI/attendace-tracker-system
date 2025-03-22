export interface Teacher {
    id: number;             // Unique ID for the teacher
    name: string;           // Full name of the teacher
    email: string;          // Email address
    department: string;     // Department or subject specialization
    phone?: string;         // Optional phone number
    hireDate?: Date;        // Optional date of hire
  }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Teacher } from '../model/teacher';
import { Student } from '../model/student';
import { Course } from '../model/student/course';
import { Subject } from '../model/subject';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  openEditSubjectDalog(subject: Subject, selectedSubjectID: number) {
    throw new Error('Method not implemented.');
  }

  add: boolean = false;
  selectedTeacher!: Teacher;
  selectedTeacherID:number=0;
  selectedStudent!: Student;
  selectedStudentID:number=0;
  selectedCourse!: Course;
  selectedCourseID:number=0;
  selectedSubject!: Subject;
  selectedSubjectID:number=0;
  


  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post('http://localhost:5000/api/auth/login', { ...user });
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:5000/api/users');
  }


  addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/users', { ...user });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/users/${id}`);
  }

  editUser(user: any,id:any): Observable<any> {
    return this.http.put(`http://localhost:5000/api/users/${id}`, { ...user });
  }

  addCourse(course: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/course', { ...course });
  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:5000/api/course');
  }

  deleteCourse(id: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/course/${id}`);
  }

  editCourse(user: any,id:any): Observable<any> {
    return this.http.put(`http://localhost:5000/api/course/${id}`, { ...user });
  }
  addSubject(subject: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/subjects', { ...subject });
  }

  getSubjects(): Observable<any> {
    return this.http.get('http://localhost:5000/api/subjects');
  }
  deleteSubject(id: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/subjects/${id}`);
  }

  editSubject(subject: any,id:any): Observable<any> {
    return this.http.put(`http://localhost:5000/api/subjects/${id}`, { ...subject });
  }
}

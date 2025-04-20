import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Teacher } from '../model/teacher';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  add: boolean = false;
  selectedTeacher!: Teacher;
  selectedTeacherID:number=0;


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
}

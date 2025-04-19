import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post('http://localhost:5000/api/auth/login', { ...user });
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:5000/api/users');
  }
  

addUser(user:any): Observable<any> {
    return this.http.post('http://localhost:5000/api/users',{ ...user });
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/users/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post('http://localhost:5000/api/auth/login', { ...user });
  }
}

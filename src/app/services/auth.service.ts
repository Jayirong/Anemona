import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private apiUrlUser = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token : string }>(`${this.apiUrl}/login`, {username, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });    
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false; 
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
    }    
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrlUser}/register`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
 
}

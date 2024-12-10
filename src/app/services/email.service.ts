import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:4200/weiland-epito-angular3/api/sendEmail.php';

  constructor(private http: HttpClient) {}

  sendEmail(message: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `message=${encodeURIComponent(message)}`;
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

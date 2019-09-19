import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    return throwError(error.error);
  }

  get(path: string, data: any): Observable<any> {
    return this.http.get(`${environment.base_url}${path}`, { params: data })
      .pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line: ban-types
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.base_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line: ban-types
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.base_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleError));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.base_url}${path}`
    ).pipe(catchError(this.handleError));
  }
}

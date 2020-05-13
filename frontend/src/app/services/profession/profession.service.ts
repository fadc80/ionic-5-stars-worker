import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  readonly BASE_URL = environment.mainEndpoint + '/professions';

  constructor(private http: HttpClient) { }

  listAll(): Observable<string[]> {
    return this.http.get<string[]>(this.BASE_URL).pipe(
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Worker } from 'src/app/model/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  readonly BASE_URL = environment.mainEndpoint + '/workers';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.BASE_URL).pipe(
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OldDirectoryService {
  apiUrl = 'http://localhost:8082/members?searchString=';

  constructor(private http: HttpClient) {}

  getMatchingOldMembers(searchString: String) {
    return this.http.get(this.apiUrl + searchString);
  }
}

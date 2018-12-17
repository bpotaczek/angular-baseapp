import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { mapResponse } from '../../shared/operators/map-response';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get<ServiceResponse<User[]>>(environment.apiUrl + '/api/users/').pipe(
    //   mapResponse()
    // );
    return of([
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' },
      { id: '3', name: 'User 3' },
      { id: '4', name: 'User 4' },
      { id: '5', name: 'User 5' }
    ]);
  }

  updateUser(user: User): Observable<User> {
    // return this.http.put<ServiceResponse<User>>(environment.apiUrl + '/api/users/', user).pipe(
    //   mapResponse()
    // );
    return of(user);
  }
}

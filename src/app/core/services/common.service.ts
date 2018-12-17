import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class CommonService {
    constructor(private http: HttpClient) { }

    getMenuItems(): Observable<MenuItem[]> {
        return of([
            { label: 'Home', routerLink: ['/home'] },
            { label: 'List', routerLink: ['/users/list'] }
        ]);
    }
}


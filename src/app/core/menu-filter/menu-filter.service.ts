import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable()
export class MenuFilter implements PoMenuFilter {
  private url: string = 'http://localhost:3000/menus';
//  private url: string = 'https://po-sample-api.fly.dev/v1/menus';

  constructor(private http: HttpClient) {}

  getFilteredData(label: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { label };

//  return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
    return this.http.get(this.url, { params }).pipe(map((response: any) => response));
  }
}
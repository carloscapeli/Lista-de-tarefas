import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor(private http: HttpClient) { }

  listTasks() {

    return this.http.get<Tasks[]>(API + '/tasks');
    
  }
}

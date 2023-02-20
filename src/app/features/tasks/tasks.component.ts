import { Component, OnInit } from '@angular/core';

import { Tasks } from '../../core/tasks/tasks';
import { TasksService } from '../../core/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.tasksService.listTasks().subscribe((tasks) => this.tasks = tasks);

  }

}

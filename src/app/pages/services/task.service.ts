import { Injectable } from '@angular/core';
import { Task } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  setTasksLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasksLocalStorage(): Task[] {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }


}

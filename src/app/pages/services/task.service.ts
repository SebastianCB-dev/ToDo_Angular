import { Injectable } from '@angular/core';
import { Eatable, Task } from '../interfaces/interface';

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

  setGroseriesLocalStorage(groseries: Eatable[]) {
    localStorage.setItem("groseries", JSON.stringify(groseries));
  }

  getGroseriesLocalStorage(): Eatable[] {
    return JSON.parse(localStorage.getItem("groseries") || "[]");
  }

}

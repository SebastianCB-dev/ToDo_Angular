import { Component, ViewChild } from '@angular/core';


interface Task {
  description: string,
  fecha: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[] = [];
  input: string = '';

  showMain: boolean = true;
  isError: boolean = false;

  agregarTarea() {
    this.showMain = false;
    this.isError = false;
  }

  addNewTask() {
    this.showMain = true;
    if(this.input == '') {
      this.isError = true;
      return;
    }    
    this.tasks.push({
      description: this.input,
      fecha: '11/04/2021'
    });
    this.input = '';
  }


}

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
  username: string = 'User';
  userEditing: string = '';
  showMain: boolean = true;
  isError: boolean = false;
  isEditing: boolean = false;
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

  modeEditionProfile() {
    this.isEditing = true;
  }

  guardarName() {
      if(this.userEditing.length != 0) {
        this.username = this.userEditing;
        this.userEditing = '';
        this.isEditing = false;
      }
  }

  cancelar() {
    this.isEditing = false;
  }
}

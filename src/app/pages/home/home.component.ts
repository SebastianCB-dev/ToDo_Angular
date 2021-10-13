import { Component, OnInit } from '@angular/core';


interface Task {
  description: string,
  fecha: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: string = 'User';
  showMain: boolean = true;
  isError: boolean = false;
  input: string = '';
  tasks: Task[] = [];



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
  constructor() { }

  ngOnInit(): void {
  }

}

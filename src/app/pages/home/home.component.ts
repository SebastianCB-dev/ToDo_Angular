import { Component, Input, OnInit } from '@angular/core';


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
  fechaPick: string = '';
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
    if( !this.fechaPick ) {
      this.fechaPick = this.traerFecha();
    }           
     this.tasks.push({
       description: this.input,
       fecha: this.fechaPick
    });
    this.input = '';
    this.fechaPick = '';
    
  }
  constructor() {    
  }

  ngOnInit(): void {
    
  }

  traerFecha() {
    return (new Date().getFullYear())+ '-' + (new Date().getMonth() + 1) + '-' +  (new Date().getDate());
  }

}

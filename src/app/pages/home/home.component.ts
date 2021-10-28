import { Component, OnInit } from '@angular/core';


interface Task {
  description: string,
  fecha: string,
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  music = new Audio('../../../assets/sounds/task_completed.mp3');
  musicError = new Audio('../../../assets/sounds/delete.mp3');
  musicAdd = new Audio('../../../assets/sounds/add.mp3');
  user: string = 'User';
  showMain: boolean = true;
  isError: boolean = false;
  input: string = '';
  tasks: Task[] = [];
  fechaPick: string = '';
  message: string = '';
  idTask: number = 0;

  agregarTarea() {
    this.showMain = false;
    this.isError = false;
  }

  addNewTask() {
    this.showMain = true;
    if(this.input == '') {
      this.message = 'Add a description!';
      this.isError = true;
      this.input = '';
      return;
    } 
    if(this.input.length > 70) {
      this.message = 'The description is very long (max length = 70)';
      this.isError = true;
      this.input = '';
      return;
    }
    if( !this.fechaPick ) {
      this.fechaPick = this.traerFecha();
    } 
    this.tasks.reverse();          
     this.tasks.push({
       description: this.input,
       fecha: this.fechaPick,
       completed: false
    });
    this.tasks.reverse();
    this.emitirSonidoAgregarTarea();
    this.input = '';
    this.fechaPick = '';
    this.idTask++;    
  }
  constructor() {    
  }

  ngOnInit(): void {
    
  }

  traerFecha() {
    return (new Date().getFullYear())+ '-' + (new Date().getMonth() + 1) + '-' +  (new Date().getDate());
  }


  eliminarTarea(id: number) {
    this.tasks.splice(id,1);
    this.emitirSonidoeliminarTarea();
  }

  completarTarea( id: number ){
    this.tasks[id].completed = !this.tasks[id].completed;
    if( this.tasks[id].completed ) {
      // Emitir Sonido
      this.emitirSonidoCompletarTarea();
    }
    this.ordenarTareas();    
  }
  emitirSonidoAgregarTarea() {
    
    this.musicAdd.pause();
    this.musicAdd.currentTime = 0;
    this.musicAdd.volume = 0.3;
    this.musicAdd.play();
  }
  emitirSonidoCompletarTarea() {
    this.music.pause();
    this.music.currentTime = 0;
    this.music.volume = 0.3;
    this.music.play();
  }
  emitirSonidoeliminarTarea() {
    this.musicError.pause();
    this.musicError.currentTime = 0;
    this.musicError.volume = 0.8;
    this.musicError.play();
  }

  isCompleted( id: number ): string {
    if(this.tasks[id].completed) {
      return 'completed task';
    }
    else {
      return 'task';
    }
  }

  ordenarTareas() {
    this.tasks.sort( function(x, y) {   
      return (x.completed === y.completed)? 0 : x.completed? -1 : 1;
    })    
    this.tasks.reverse();
  }

}

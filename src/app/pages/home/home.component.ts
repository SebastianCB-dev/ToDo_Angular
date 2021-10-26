import { Component, Input, OnInit } from '@angular/core';


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
  user: string = 'User';
  showMain: boolean = true;
  isError: boolean = false;
  complete: boolean = false;
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
     this.tasks.push({
       description: this.input,
       fecha: this.fechaPick,
       completed: this.complete
    });
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
  }

  completarTarea( id: number ){
    this.tasks[id].completed = !this.tasks[id].completed;
    if( this.tasks[id].completed ) {
      // Emitir Sonido
      this.emitirSonido();
    }
    
  }

  emitirSonido() {
    this.music.pause();
    this.music.currentTime = 0;
    this.music.play();
  }

}

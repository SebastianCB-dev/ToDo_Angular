import { Component, Input, OnInit } from '@angular/core';
import { Eatable } from '../interfaces/interface';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.scss']
})
export class ComestiblesComponent implements OnInit {
  music = new Audio('../../../assets/sounds/task_completed.mp3');
  musicError = new Audio('../../../assets/sounds/delete.mp3');
  musicAdd = new Audio('../../../assets/sounds/add.mp3');
  user: string = 'User';
  showMain: boolean = true;
  isError: boolean = false;
  input: string = '';
  groseries: Eatable[] = [];
  amount: string = '1';
  message: string = '';
  idEatable: number = 0;

  addEatable() {
    this.showMain = false;
    this.isError = false;
  }

  addNewEatable() {
    this.showMain = true;
    if(this.input == '') {
      this.message = 'Add a product description!';
      this.isError = true;
      this.input = '';
      return;
    } 
    if(this.input.length > 70) {
      this.message = 'The product is very long (max length = 70)';
      this.isError = true;
      this.input = '';
      return;
    } 
    if(isNaN(parseInt(this.amount)) ){
      this.message = 'The amount require a number!';
      this.isError = true;
      this.input = '';
      this.amount = '1';
      return;
    }
    if(parseInt(this.amount) < 0 ) {
      this.message = 'The amount require a positive number!';
      this.isError = true;
      this.input = '';
      this.amount = '1';
      return;
    }
    this.groseries.reverse();       
     this.groseries.push({
       product: this.input,
       amount: parseInt(this.amount),
       completed: false
    });
    this.groseries.reverse();
    this.TaskService.setGroseriesLocalStorage(this.groseries); 
    this.emitirSonidoAgregarComestible();
    this.input = '';
    this.amount = '1';
    this.idEatable++;    
  }
  constructor(
    private TaskService: TaskService
  ) {   
    this.groseries = this.TaskService.getGroseriesLocalStorage(); 
  }

  ngOnInit(): void {
    
  }

  deleteEatable(id: number) {
    this.groseries.splice(id,1);
    this.TaskService.setGroseriesLocalStorage(this.groseries); 
    this.emitirSonidoeliminarComestible();
  }
  completarComestible(id: number ){
    this.groseries[id].completed = !this.groseries[id].completed;
    if( this.groseries[id].completed ) {
      // Emitir Sonido
      this.TaskService.setGroseriesLocalStorage(this.groseries); 
      this.emitirSonido();
    }
    this.ordenarComestibles();
  }
  emitirSonido() {
    this.music.pause();
    this.music.currentTime = 0;
    this.music.volume = 0.3;
    this.music.play();
  }

  emitirSonidoAgregarComestible() {
    
    this.musicAdd.pause();
    this.musicAdd.currentTime = 0;
    this.musicAdd.volume = 0.3;
    this.musicAdd.play();
  }
  emitirSonidoeliminarComestible() {
    this.musicError.pause();
    this.musicError.currentTime = 0;
    this.musicError.volume = 0.8;
    this.musicError.play();
  }

  ordenarComestibles() {
    this.groseries.sort( function(x, y) {   
      return (x.completed === y.completed)? 0 : x.completed? -1 : 1;
    })    
    this.groseries.reverse();
  }

  isCompleted( id: number ): string {
    if(this.groseries[id].completed) {
      return 'completed eatable';
    }
    else {
      return 'eatable';
    }
  }

}

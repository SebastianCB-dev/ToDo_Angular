import { Component, Input, OnInit } from '@angular/core';
import { Eatable } from '../interfaces/interface';
import { TaskService } from '../services/task.service';
import { SoundService } from '../services/sound.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.scss']
})
export class ComestiblesComponent implements OnInit {
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
    this.taskService.setGroseriesLocalStorage(this.groseries); 
    this.soundService.emitAdd();
    this.input = '';
    this.amount = '1';
    this.idEatable++;    
  }
  constructor(
    private taskService: TaskService,
    private soundService: SoundService
  ) {   
    this.groseries = this.taskService.getGroseriesLocalStorage(); 
    this.ordenarComestibles();
  }

  ngOnInit(): void {
    
  }

  deleteEatable(id: number) {
    this.groseries.splice(id,1);
    this.taskService.setGroseriesLocalStorage(this.groseries); 
    this.soundService.emitDelete();
  }
  completarComestible(id: number ){
    this.groseries[id].completed = !this.groseries[id].completed;
    if( this.groseries[id].completed ) {
      // Emitir Sonido
      this.taskService.setGroseriesLocalStorage(this.groseries); 
      this.soundService.emitCompleted();
    }
    this.ordenarComestibles();
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

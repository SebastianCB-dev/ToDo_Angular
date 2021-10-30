import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  music = new Audio('../../../assets/sounds/task_completed.mp3');
  musicError = new Audio('../../../assets/sounds/delete.mp3');
  musicAdd = new Audio('../../../assets/sounds/add.mp3');

  emitCompleted() {
    this.music.pause();
    this.music.currentTime = 0;
    this.music.volume = 0.3;
    this.music.play();
  }

  emitAdd() {
    
    this.musicAdd.pause();
    this.musicAdd.currentTime = 0;
    this.musicAdd.volume = 0.3;
    this.musicAdd.play();
  }
  emitDelete() {
    this.musicError.pause();
    this.musicError.currentTime = 0;
    this.musicError.volume = 0.8;
    this.musicError.play();
  }

  constructor() { }
}

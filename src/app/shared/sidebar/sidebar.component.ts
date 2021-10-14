
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  username: string = 'User';
  @Output() userEmit = new EventEmitter<string>();
  srcImage: SafeResourceUrl = 'https://www.pngrepo.com/png/133681/512/doormat.png';
  isEditing: boolean = false;
  userEditing: string = '';
  file: string = '';


  modeEditionProfile() {
    this.isEditing = true;
  }
  
 guardarOptions() {
      if(this.userEditing.length != 0) {
        this.username = this.userEditing;
        this.userEmit.emit(this.username);        
        this.userEditing = '';
        this.isEditing = false;
      }      
  }
  

  constructor() {
    this.userEmit.emit('User');
   }

  ngOnInit(): void {
    
  }

  cancelar() {
    this.isEditing = false;
  }

  irAlRepositorio() {
    window.open('https://github.com/SebastianCB-dev/ToDo_Angular','_blank');
  }

}

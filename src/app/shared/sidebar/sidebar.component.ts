import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  username: string = 'User';
  srcImage: string = 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png';
  isEditing: boolean = false;
  userEditing: string = '';
  file: string = '';


  modeEditionProfile() {
    this.isEditing = true;
  }

 guardarOptions() {
      if(this.userEditing.length != 0) {
        this.username = this.userEditing;
        this.userEditing = '';
        this.isEditing = false;
      }
      if(this.file.length != 0) {        
        this.srcImage = this.file;
      }
  }
  constructor() { }

  ngOnInit(): void {
  }
  cancelar() {
    this.isEditing = false;
  }
}

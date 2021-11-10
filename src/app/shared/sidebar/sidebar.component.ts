
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
  srcImage: SafeResourceUrl = 'https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png';
  isEditing: boolean = false;
  userEditing: string = '';
  file: string = '';
  public sidebar!: Element; 
  public tasks!: Element;
  public buttonResponsive!: Element;
  public asideConfig!: Element;


  modeEditionProfile() {
    this.isEditing = true;
  }
  
 guardarOptions() {
      if(this.userEditing.length != 0 && this.userEditing.length <= 10) {
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
    this.sidebar = document.querySelector('#sidebar')!;
    this.tasks = document.querySelector('#tasks-main')!;
    this.buttonResponsive = document.querySelector('#button-responsive-menu')!;
    this.asideConfig = document.querySelector('#aside-config')!;
  }

  cancelar() {
    this.isEditing = false;
  }

  irAlRepositorio() {
    window.open('https://github.com/SebastianCB-dev/ToDo_Angular','_blank');
  }

  cerrarSidebar() {    
    this.asideConfig.setAttribute('style', 'display:none');  
    this.tasks.setAttribute('style','display: block');
    this.buttonResponsive.setAttribute('style', 'display:block');  
  }

  activarMenu() {
    this.tasks.setAttribute('style','display: none'); 
    this.buttonResponsive.setAttribute('style', 'display:none');  
    console.log(this.sidebar); 
    this.asideConfig.setAttribute('style', 'display:block');  
  }

}

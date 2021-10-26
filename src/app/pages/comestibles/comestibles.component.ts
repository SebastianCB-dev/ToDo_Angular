import { Component, Input, OnInit } from '@angular/core';

interface Eatable {
  product: string,
  amount : number
}

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
      this.message = 'Add a product!';
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
              
     this.groseries.push({
       product: this.input,
       amount: parseInt(this.amount)
    });
    this.input = '';
    this.amount = '1';
    this.idEatable++;    
  }
  constructor() {    
  }

  ngOnInit(): void {
    
  }

  deleteEatable(id: number) {
    this.groseries.splice(id,1);
  }

}

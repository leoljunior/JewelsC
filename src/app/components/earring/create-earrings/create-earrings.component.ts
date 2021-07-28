import { Component } from '@angular/core';
import { Earring } from '../earring'

@Component({
  selector: 'app-create-earrings',
  templateUrl: './create-earrings.component.html',
  styleUrls: ['./create-earrings.component.css']
})
export class CreateEarringsComponent  { 

  earring: Earring = new Earring()
  earringList: Earring[] = []
  
  constructor() { }  

  save(form) {
    this.earringList.push(this.earring)
    console.log(this.earringList)
    this.earring = new Earring()
  }
}
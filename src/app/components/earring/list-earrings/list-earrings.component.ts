import { Component, Input, OnInit } from '@angular/core';
import { Earring } from '../earring';


@Component({
  selector: 'app-list-earrings',
  templateUrl: './list-earrings.component.html',
  styleUrls: ['./list-earrings.component.css']
})
export class ListEarringsComponent implements OnInit {
  earringList: Earring[]
  @Input() dados: []


  

  constructor() { }

 
  ngOnInit(): void {
    this.earringList = this.dados
  }

}

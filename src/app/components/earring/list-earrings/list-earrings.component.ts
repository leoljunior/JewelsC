import { Component, OnInit } from '@angular/core';
import { CreateEarringsService } from '../create-earrings.service';
import { Earring } from '../earring';


@Component({
  selector: 'app-list-earrings',
  templateUrl: './list-earrings.component.html',
  styleUrls: ['./list-earrings.component.css']
})
export class ListEarringsComponent implements OnInit {
  earringList: Earring[]  

  constructor(private earringService: CreateEarringsService) { }
 
  ngOnInit(): void {
   this.earringList = this.earringService.getAll()
  }

}

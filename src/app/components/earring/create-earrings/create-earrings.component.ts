import { Component, OnInit } from '@angular/core';
import { CreateEarringsService } from '../create-earrings.service';
import { Earring } from '../earring'

@Component({
  selector: 'app-create-earrings',
  templateUrl: './create-earrings.component.html',
  styleUrls: ['./create-earrings.component.css']
})
export class CreateEarringsComponent implements OnInit  { 

  earring: Earring
  earringList: Earring[]

  constructor(private earringService: CreateEarringsService) { }  

  ngOnInit() {
    this.earring = new Earring()
    this.earringService.loadLocal()
    this.earringList = this.earringService.getAll()
  }  

  save(earringForm) {
   this.earringService.save(this.earring)
   this.earring = new Earring()
   earringForm.reset()
  }
}
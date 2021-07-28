import { Injectable } from '@angular/core';
import { Earring } from './earring';

@Injectable({
  providedIn: 'root'
})
export class CreateEarringsService {

  earringsList: Earring[] = []

  constructor() { }

  getAll() {
    this.loadLocal()
    return this.earringsList
  }

  save(earring: Earring) {
    this.earringsList.push(earring)
    this.saveLocal()
  }

  saveLocal() {
    const data = JSON.stringify(this.earringsList)
    localStorage.setItem('earringsList', data)
  }

  loadLocal() {
    const data = localStorage.getItem('earringsList')
      if(data) {
        this.earringsList = JSON.parse(data)
      } else {
        this.earringsList = []
      }
    }
  }

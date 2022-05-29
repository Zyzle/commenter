import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public previewing = false;

  public activeTab = [
    '-mb-px',
    'border-l',
    'border-t',
    'border-r',
    'rounded-t',
    'text-blue-700',
  ]

  public inactiveTab = [
    'text-blue-500', 
    'hover:text-blue-800', 
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

  write() {
    this.previewing = false;
  }

  preview() {
    this.previewing = true;
  }

}

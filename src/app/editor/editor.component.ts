import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { marked } from 'marked';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  public previewing = false;
  public comment = '';

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

  getTabCss(isActive: boolean) {
    return isActive ? [
      '-mb-px',
      'border-l',
      'border-t',
      'border-r',
      'rounded-t',
      'text-blue-700',
    ] : [
      'text-blue-500', 
      'hover:text-blue-800', 
    ];
  }

  markdownPreview() {
    return marked.parse(this.comment);
  }

}

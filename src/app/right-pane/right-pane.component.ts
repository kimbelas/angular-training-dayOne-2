import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent implements OnInit {
  paneValue = 'N/A';
  @Input() leftPaneValue;
  @Output() submitRight = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.submitRight.emit(this.paneValue);
  }
}

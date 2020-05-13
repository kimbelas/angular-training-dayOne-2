import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  paneValue = 'N/A';
  @Input() rightPaneValue;
  @Output() submitLeft = new EventEmitter<string>();

  constructor() { 
    console.log("contructor");
    
  } 

  ngOnInit(): void {
    console.log("ngOnInit");
    
  }

  onClick()
  {
    this.submitLeft.emit(this.paneValue);
  }

  ngOnChanges(){
    console.log("ngOnChanges");
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    
  }
}

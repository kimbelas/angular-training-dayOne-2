import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject2';

  appLeftPaneValue = 'app comp left';
  appRightPaneValue = 'app comp right';

  appSubmitLeft(value : string){
    this.appRightPaneValue = value;
  }

  appSubmitRight(value : string){
    this.appLeftPaneValue = value;
  }
}


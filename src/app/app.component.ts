import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageName = 'Angular Nerds';

  constructor() {
    // console.log(this.lastestPost);
  }
}

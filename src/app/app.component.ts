import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private showDropdownList: boolean;

  mouseEnter() {
    this.showDropdownList = true;
  }

  mouseLeave() {
    this.showDropdownList = false;
  }
}

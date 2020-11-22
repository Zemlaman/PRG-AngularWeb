import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  @Output() clickHamb: EventEmitter<any> = new EventEmitter();

  search = '';
  block = false;
  rolled = false;

  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  toggleOptions() {
    if (this.block === true) {
      this.block = false;
    } else {
      this.block = true;
    }
  }

  toggleOptionsOff() {
    this.block = false;
  }

  toggleOffSidebar() {
    if (this.rolled === true) {
      this.rolled = false;
    } else {
      this.rolled = true;
    }

  }

  ngOnInit() {

  }
}

class SearchOption {
  title: string;
  path: string;
}


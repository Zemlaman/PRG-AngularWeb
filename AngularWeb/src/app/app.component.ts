import {Component, EventEmitter, Output} from '@angular/core';

interface ISearchOption {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-stranka';
  search = '';
  rolled = false;
  resultStorage: ISearchOption[] = [
    {title: ' home ', path: ''},
    {title: ' O nás ', path: 'about'},
    {title: ' Kontaktní formulář ', path: 'contact'},
  ];
}

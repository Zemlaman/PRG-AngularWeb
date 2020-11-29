import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  newusername = '';
  newid: number = (Math.random() * 100);

  constructor() {}

  ngOnInit(): void {
  }

}

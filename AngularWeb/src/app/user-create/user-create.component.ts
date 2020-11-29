import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  newUsername: "";
  newId: number;

  constructor() {}

  addUser() {
    this.newUsername = this.newUsername;
    this.newId = (Math.random() * 100);
  }

  ngOnInit(): void {
  }

}

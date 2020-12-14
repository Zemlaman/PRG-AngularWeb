import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements  OnInit{

  username = "";


  constructor(
    private readonly usersService: UsersService,
    private readonly  router: Router
  ) {}

  addUser(): void {
    this.usersService.addUser(this.username)
      .subscribe(user => this.router.navigateByUrl("/users"));
    console.error("Vítej cápečku.");
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserEntity, UsersService} from "../users.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity;
  newUsername = "";

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly  usersService: UsersService,
    private readonly  router: Router
  ) { }

  changeUsername(id: number): void {
    this.usersService.changeUsername(id, this.newUsername);
    this.router.navigateByUrl('/users');
  }

  deleteUser(id: number): void {
    this.usersService.deleteUsername(id, this.newUsername);
    this.router.navigateByUrl('user-create');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get("id");
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(
          u => {
            if(u) {
              this.user = u;
            } else {
              this.router.navigateByUrl("/users")
            }
          },
          e => {
            console.error(e);
          }
        );

    })
  }

}

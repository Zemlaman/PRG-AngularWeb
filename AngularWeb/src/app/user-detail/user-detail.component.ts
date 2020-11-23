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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly  userService: UsersService,
    private readonly  router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get("id");
      const idNum = parseInt(id, 10);
      this.userService.getUserById(idNum)
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

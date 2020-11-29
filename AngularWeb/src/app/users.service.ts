import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserCreateComponent} from "./user-create/user-create.component";

export interface IUserEntity{
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUserEntity[] = [
  ];

  newid: number;
  newusername: string;


  constructor() {

  }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  getUserById(id:number): Observable<IUserEntity> {
    let user: IUserEntity;
    for(const  u of this.users){
      if(id === u.id){
        user = u;
        break;
      }
    }
    return of(user);
  }

  addUser(newid: number, newusername: string): Observable<IUserEntity[]> {
    this.users.add({id: this.newid, username: this.newusername});
    return of(this.users);
  }

}

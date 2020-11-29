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
export class UsersService implements UserCreateComponent{

  newUsername;
  newId;

  private users: IUserEntity[] = [
  ];


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

  addUser = (newId:number, newUsername:string): Observable<IUserEntity[]> => {
    this.users.push({id: this.newId, username: this.newUsername});
    return of(this.users);
  };

  ngOnInit(): void {
  }

}

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

  newUsername;
  changedUsername;
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

  addUser(newUsername:string): Observable<IUserEntity> {
    const newId = Math.floor( (Math.random() * 10) + 1);;
    const user: IUserEntity = {id: newId, username: newUsername};
    this.users.push(user);
    return of(user);
  }

  changeUsername(id: number, newUsername: string){
    if (this.users.find(u => u.id === id)){
      const user: IUserEntity = this.users.find(u => u.id === id);
        user.username = newUsername;
    }
  }

  deleteUsername(id: number, newUsername: string){
    if (this.users.find(u => u.id === id)){
      const user: IUserEntity = this.users.find(u => u.id === id);
      delete user.username;
      delete user.id;
    }
  }

  ngOnInit(): void {
  }


}

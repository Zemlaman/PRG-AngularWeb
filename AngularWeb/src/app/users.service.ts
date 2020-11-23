import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface IUserEntity{
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUserEntity[] = [
    {id: 1, username: "Zemlaman"}
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
}

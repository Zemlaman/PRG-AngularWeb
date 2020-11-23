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

  private users: IUserEntity[] = [];

  constructor() {

  }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }
}

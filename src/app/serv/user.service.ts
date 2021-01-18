import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  constructor() {
    this.user.name = "Praful Pathare";
  }

}

export class Address {
  public line_one: string;
  public line_two: string;
  public line_three: string;
  public city: string;
  public state: string;
  public pincode: string;
}

export class User {
  user_id: number;
  name: string;
  email: string;
  contact: string;
  addresses: Address[] = [];
}
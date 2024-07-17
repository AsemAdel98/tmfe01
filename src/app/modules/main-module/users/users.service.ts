import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public imgArray = [
    "assets/imgs/user-avatar/1.png",
    "assets/imgs/user-avatar/2.png",
    "assets/imgs/user-avatar/3.png",
    "assets/imgs/user-avatar/4.png",
    "assets/imgs/user-avatar/5.png",
    "assets/imgs/user-avatar/6.png",
    "assets/imgs/user-avatar/7.png",
    "assets/imgs/user-avatar/8.png",
    "assets/imgs/user-avatar/9.png",
    "assets/imgs/user-avatar/10.png",
    "assets/imgs/user-avatar/11.png",
    "assets/imgs/user-avatar/12.png",
    "assets/imgs/user-avatar/13.png",
    "assets/imgs/user-avatar/14.png",
    "assets/imgs/user-avatar/15.png",
    "assets/imgs/user-avatar/16.png",

  ]
  constructor() { }

  getUsers() {
    return [
      {
        id: 1,
        first_name: 'Asem',
        last_name: 'Adel',
        email: 'admin@info.co',
        avatar: "assets/imgs/user-avatar/14.png",
        phone_number: '+201016924918',
        national_id: '25454648894949',
        role: 'admin'
      },
      {
        id: 2,
        first_name: 'Mahmoud',
        last_name: 'Medhat',
        email: 'manager@info.co',
        avatar: "assets/imgs/user-avatar/15.png",
        phone_number: '+201016924918',
        national_id: '25454648894949',
        role: 'manager'
      },
      {
        id: 3,
        first_name: 'Mohamed',
        last_name: 'Salah',
        email: 'user@info.co',
        avatar: "assets/imgs/user-avatar/16.png",
        phone_number: '+201016924918',
        national_id: '25454648894949',
        role: 'user'
      },
      {
        id: 4,
        first_name: 'Amr',
        last_name: 'Adel',
        email: 'amr.adel@info.co',
        avatar: "assets/imgs/user-avatar/11.png",
        phone_number: '+201016924918',
        national_id: '25454648894949',
        role: 'user'
      },
    ]
  }
}
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  phone_number: string;
  national_id: string;
  role: string;
}[]

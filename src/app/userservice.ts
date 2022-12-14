import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  userNames: string[] = [
    'William Jesús',
    'Luis Daniel',
    'María Rosario',
    'Giancarlo Javier',
    'José Manuel',
    'Ángel Imanhol',
    'Gustavo Rafael',
    'Irma Lucero',
    'Marco Raúl',
    'Joseph Paul'
  ];
  
  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/users-small.json')
      .toPromise()
      .then((res) => <User[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getUsers() {
    return this.http
      .get<any>('assets/users.json')
      .toPromise()
      .then((res) => <User[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getUsersWithOrdersSmall() {
    return this.http
      .get<any>('assets/users-orders-small.json')
      .toPromise()
      .then((res) => <User[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generateUser(): User {
    const user: User = {
      id: this.generateId(),
      name: this.generateName(),
      description: 'User Description',
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: 'User Category',
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating(),
    };

    user.image =
      user.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    return user;
  }

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.UserNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }
}

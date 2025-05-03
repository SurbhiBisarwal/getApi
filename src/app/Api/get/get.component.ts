import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [],
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss',
})
export class GetComponent {
  userList: any[] = [];
  constructor(private http: HttpClient) {}
  getUser() {
    this.http
      .get('https://json-placeholder.mock.beeceptor.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }
}

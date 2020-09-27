import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const user = (document.querySelector('#user') as HTMLInputElement).value
    const password = (document.querySelector('#password') as HTMLInputElement).value
    this._api.login(user, password).subscribe(response => {
      if(response.success) {
        this._user.user = response.user
        console.log(this._user.user);
      }
    })
  }

}

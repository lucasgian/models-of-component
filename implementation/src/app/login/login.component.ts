import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor() { }

  onSubmit(form) {
    console.log(this.user);
  }

  validationField(field) {
    return field.invalid && (field.dirty || field.touched);
  }
  ngOnInit() {
  }

}

import { Component} from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent {

  user = new User();

  constructor() { }

  onSubmit (form) {
    console.log(this.user);  
  }

  ngOnInit() {
  }

}

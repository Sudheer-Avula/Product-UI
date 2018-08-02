import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user: User;
emailPattern = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$.';
  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ( form != null) {
    form.reset();
    this.user = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: ''
    };
  }
}
}

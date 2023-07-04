import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  isPasswordVisible=false;
  toggle()
  {
    this.isPasswordVisible=!this.isPasswordVisible;
  }


  form =new FormGroup(
    {
    username :new  FormControl('',[Validators.required,UsernameValidators.cannotcontainspace],UsernameValidators.unique),
    password :new FormControl('',[Validators.required,Validators.minLength(6)]),
    }
  )

  login()
  {
    this.form.setErrors({
      invalid:true
    })
  }
  get username()
  {
    return this.form.get('username');
  }
  get password()
  {
    return this.form.get('password');
  }
}

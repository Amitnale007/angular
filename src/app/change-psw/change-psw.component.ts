import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OldPassValidator } from './old.validators';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent {
  form=new FormGroup(
    {
      oldpass:new FormControl('',[Validators.required],OldPassValidator.match),
      newpass:new FormControl('',Validators.required),
      conpass:new FormControl('',[Validators.required])
    },
    {
      validators:OldPassValidator.detect
    });

  get oldpass()
  {
    return this.form.get('oldpass');
  }
  get newpass()
  {
    return this.form.get('newpass');
  }
  get conpass()
  {
    return this.form.get('conpass');
  }
}

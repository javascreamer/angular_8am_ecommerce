import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  registerForm= new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    emailId: new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{5,10}$/)]),
    mobileNumber: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)])
  })

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get emailId(){
    return this.registerForm.get('emailId');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get mobileNumber(){
    return this.registerForm.get('mobileNumber');
  }
  registerUser(formData){

  }

  
}

import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])
  password = new FormControl("" , [
    Validators.required,
    Validators.minLength(6)
  ])
  loginForm = new FormGroup({
    email : this.email,
    password: this.password

  })
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm);
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid){
      return
    }
     this.router.navigateByUrl('/home');
    // if(!this.loginForm.value.email || !this.loginForm.value.password){
    //   alert("Details must be added");
    // }
    // else{
    //   this.router.navigate(['home']);
    // }
    
    
  }
  
}

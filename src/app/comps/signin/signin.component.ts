import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm= new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  })

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

    signIn(){
      this.http.post(
        "http://127.0.0.1:8088/admin/authenticate",
        {
          email : this.signInForm.controls['email'].value,
          password : this.signInForm.controls['password'].value
        }
      ).subscribe( data => {
        localStorage.setItem("jwt", data['token']);
        console.log(data)
      })
    }
}

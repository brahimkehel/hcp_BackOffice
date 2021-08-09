import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string="http://localhost:3000/api/";

  constructor(private http:HttpClient) { }

  login(form:NgForm)
  {
    return this.http.post(this.url+"user/login",{email:form.controls['email'].value,motdepasse:form.controls['motdepasse'].value});
  }
}

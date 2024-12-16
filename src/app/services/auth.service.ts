import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../../public/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient,private router:Router) { }
  public login(loginCredentials:any){
   
    return this.http.post<any>(`${Constants.baseApi}/login`,loginCredentials)
  
    }
    public verifyCode(loginCredentials:any){
   
      return this.http.post<any>(`${Constants.baseApi}/verify-code`,loginCredentials)
    
      }
  }

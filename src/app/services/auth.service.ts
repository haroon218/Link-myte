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
      public createCard(loginCredentials:any){
   
        return this.http.post<any>(`${Constants.baseApi}/card-detial-store`,loginCredentials)
      
        }
        public logout() {
          return this.http.post<any>(`${Constants.baseApi}/logout`, {}); // Passing an empty object as body
        }
      public checkPackage(){
   
        return this.http.get<any>(`${Constants.baseApi}/active-package-detials`,)
      
        }
        public activePackage(payload:any){
   
          return this.http.get<any>(`${Constants.baseApi}/active-package`,payload)
        
          }
          public getcardListing(){
   
            return this.http.get<any>(`${Constants.baseApi}/cards-listing`)
          
            }
  }

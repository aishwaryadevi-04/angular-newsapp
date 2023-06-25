import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class AuthEmailService{

    private email: string='';

  constructor() { }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
     
    return this.email;
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey: string = 'AIzaSyDMtOl1J8ux637gklGHyZOZekIYo-cwQ70'


  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      { email, password, returnSecureToken: true })
  }

}

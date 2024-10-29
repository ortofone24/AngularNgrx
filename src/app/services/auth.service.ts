import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponseData } from "../shared/models/AuthResponseData.model";
import { Observable } from "rxjs";
import { User } from "../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey: string = 'AIzaSyDMtOl1J8ux637gklGHyZOZekIYo-cwQ70'


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      { email, password, returnSecureToken: true })
  }

  formatUser(data: AuthResponseData) {

    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);

    const date = "dupadupa"

    const user = new User(data.email, data.idToken, data.localId, expirationDate);

    //console.log(user.expirationDate)

    return user;
  }

}



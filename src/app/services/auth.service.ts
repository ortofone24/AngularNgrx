import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponseData } from "../shared/models/AuthResponseData.model";
import { Observable } from "rxjs";
import { User } from "../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  apiKey: string = 'AIzaSyDMtOl1J8ux637gklGHyZOZekIYo-cwQ70'
  timeoutInterval: any;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      { email, password, returnSecureToken: true })
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      { email, password, returnSecureToken: true })
  }


  formatUser(data: AuthResponseData) {

    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);

    const user = new User(data.email, data.idToken, data.localId, expirationDate);

    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Email not found';
      case 'INVALID_PASSWORD':
        return 'Invalid password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occured. Please try again'
    }
    //return null;
  }

  setUserInLocalStorage(user: User) {
    if(this.isLocalStorageAvailable){
      localStorage.setItem('userData', JSON.stringify(user));
      this.runTimeoutInterval(user)
    }
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.expireDate().getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      /*write logout functionality or get the refresh token*/

    }, timeInterval)
  }

  getUserFromLocalStorage() {

    if(this.isLocalStorageAvailable) {
      const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email, 
        userData.token, 
        userData.localId, 
        expirationDate);
        this.runTimeoutInterval(user);
        return user;
    }}
      return null;
  }

}

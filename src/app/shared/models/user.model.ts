export class User {
  constructor(
    private email: string,
    private token: string,
    private localId: string,
    private expirationDate: Date

  ) { }
}


//export interface User {
//  email: string,
//  token: string,
//  localId: string,
//  expirationDate: string
//}



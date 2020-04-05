import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private AFAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    this.AFAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("error :" + err));
  }
}

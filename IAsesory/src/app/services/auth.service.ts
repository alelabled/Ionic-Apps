import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { promise } from "protractor";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  constructor(
    public afs: AngularFirestore,
  ){}
  addClothes(value){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/clothes').add({
        name: value.name,
        surname: value.surname,
        age: parseInt(value.age)
      })
      .then((res) => {
        resolve(res)
      },err => reject(err))
    })
  }
}

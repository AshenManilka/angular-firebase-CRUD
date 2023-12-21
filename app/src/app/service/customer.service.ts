import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firestore:AngularFirestore) { }

  createCustomer(customer:any):Promise<any>{
   return this.firestore.collection('customers').add(customer);
  }

  loadAll():Observable<any>{
    return this.firestore.collection('customers').snapshotChanges();
   }

   findCustomer(id:any):Observable<any>{
    // return this.firestore.collection('customers').doc(id).valueChanges();

    return this.firestore.collection('customers').doc(id).valueChanges()
    .pipe(
      tap(data => console.log('Data from findCustomer:', data)),
      catchError(error => {
        console.error('Error in findCustomer:', error);
        throw error; // rethrow the error
      })
    );
   }

   updateCustomer(id:any , customer:any):Promise<any>{
    return this.firestore.collection('customers').doc(id).update(customer);
   }

   deleteCustomer(id:any):Promise<any>{
    return this.firestore.collection('customers').doc(id).delete();
   }

}


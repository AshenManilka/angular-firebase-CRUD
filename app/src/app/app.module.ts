import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { NewCustomerComponent } from './component/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCustomerComponent,
    NewCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

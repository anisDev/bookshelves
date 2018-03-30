import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: 'AIzaSyDhj5W_HX_tVVIy36-N3qE7k85T2khYkjc',
      authDomain: 'bookshelves-1ee79.firebaseapp.com',
      databaseURL: 'https://bookshelves-1ee79.firebaseio.com',
      projectId: 'bookshelves-1ee79',
      storageBucket: 'bookshelves-1ee79.appspot.com',
      messagingSenderId: '94274557092'
    };
    firebase.initializeApp(config);
  }
}

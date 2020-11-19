// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCudtsiGgjohJk6wzjpBVeFdQTDsqFePYk",
    authDomain: "energyshop-c6722.firebaseapp.com",
    databaseURL: "https://energyshop-c6722.firebaseio.com",
    projectId: "energyshop-c6722",
    storageBucket: "energyshop-c6722.appspot.com",
    messagingSenderId: "143789037992",
    appId: "1:143789037992:web:b4729fbc9fa4aee49a259d",
    measurementId: "G-K0GNDE5XFZ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

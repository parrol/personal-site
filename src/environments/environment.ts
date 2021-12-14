import { firebase } from "./firebaseConfig.env";
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * firebase: contains the configuration of the firebase database linked to this app.
 * db: reference to the firebase database
 */
export const environment = {
  production: false,
  firebase,
  db : getDatabase(initializeApp(firebase))
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

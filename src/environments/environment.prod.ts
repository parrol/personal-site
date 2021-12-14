import { firebase } from "./firebaseConfig.env";
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

export const environment = {
  production: true,
  firebase,
  db: getDatabase(initializeApp(firebase))
};

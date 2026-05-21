import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbnDOdJzQ59sEfsJO-xU7f-Wa7ArkT9Ho",
  authDomain: "smartweb-1740c.firebaseapp.com",
  databaseURL: "https://smartweb-1740c-default-rtdb.firebaseio.com",
  projectId: "smartweb-1740c",
  storageBucket: "smartweb-1740c.firebasestorage.app",
  messagingSenderId: "280816793520",
  appId: "1:280816793520:web:a37eb2caa81c329f510875",
  measurementId: "G-W7CG9SPGPP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH_f-ifLJCIKpDn_Aom4uzn1Fdluxe4xo",
  authDomain: "consultorios-c33f5.firebaseapp.com",
  databaseURL: "https://consultorios-c33f5.firebaseio.com",
  projectId: "consultorios-c33f5",
  storageBucket: "consultorios-c33f5.appspot.com",
  messagingSenderId: "722328771706",
  appId: "1:722328771706:web:9a74d03d5ad3c798daafc3",
  measurementId: "G-HKJY3E2QY5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

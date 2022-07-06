import  firebase  from 'firebase';
import "firebase/firestore"
import "firebase/auth"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvv6shxr_x4uVN7jW-m8GU03MtpOYkFuM",
    authDomain: "unishort-abf9b.firebaseapp.com",
    projectId: "unishort-abf9b",
    storageBucket: "unishort-abf9b.appspot.com",
    messagingSenderId: "906042090981",
    appId: "1:906042090981:web:0c7acbd572dcc3a836bb0c",
    measurementId: "G-JMPWL47LDH"
  };

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}else {
  app=firebase.app();
}

const db= app.firestore()
const auth = firebase.auth()
export {db,auth}
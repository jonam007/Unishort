import  firebase  from 'firebase';
import "firebase/firestore"
import "firebase/auth"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   //firebase Config
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
import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAUt3Vv8SWOD3ztPrbG5oS6Dgm6R3671tM",
    authDomain: "resturantapp-16ac4.firebaseapp.com",
    databaseURL: "https://resturantapp-16ac4-default-rtdb.firebaseio.com",
    projectId: "resturantapp-16ac4",
    storageBucket: "resturantapp-16ac4.appspot.com",
    messagingSenderId: "664815408915",
    appId: "1:664815408915:web:167718da14757c0fd92ce6"
  };
  
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage};
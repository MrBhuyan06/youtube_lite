import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTUdd005y_du-emSeu5za9T67pPb97dUQ",
  authDomain: "lite-87f07.firebaseapp.com",
  projectId: "lite-87f07",
  storageBucket: "lite-87f07.appspot.com",
  messagingSenderId: "825318984233",
  appId: "1:825318984233:web:3ac0a23483cd79dd0fea38",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export default app;

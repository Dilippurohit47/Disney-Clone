import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';




  const firebaseConfig = {
    apiKey: "AIzaSyAuGCiQUEMn3PWph1A3_bdXJs0fmjOKprc",
    authDomain: "disney-a0c37.firebaseapp.com",
    projectId: "disney-a0c37",
    storageBucket: "disney-a0c37.appspot.com",
    messagingSenderId: "465652723260",
    appId: "1:465652723260:web:0b2b9452028abb159edd39",
    measurementId: "G-0VL2R0NMP5"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, provider, storage };
export {db};
export default firebaseApp;



import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  
  apiKey: "AIzaSyAmEn5yUHz86VxMhrTvB0T3uPnlMclZahc",
  authDomain: "crwn-db-29f86.firebaseapp.com",
  projectId: "crwn-db-29f86",
  storageBucket: "crwn-db-29f86.appspot.com",
  messagingSenderId: "21520819134",
  appId: "1:21520819134:web:7d5d61f934b80f5d3c8fef",
  measurementId: "G-BHEBYQBG9G"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

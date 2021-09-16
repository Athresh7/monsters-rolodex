import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyDENoEQOP977gEos67IoijqMFPAm1EZ808",
        authDomain: "crwn-db-7247d.firebaseapp.com",
        projectId: "crwn-db-7247d",
        storageBucket: "crwn-db-7247d.appspot.com",
        messagingSenderId: "420295857215",
        appId: "1:420295857215:web:666e029a3813780c09d48a",
        measurementId: "G-K98D2VDQ93"
    
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 

    if(!snapShot.exists) {
        const { dispalyName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                dispalyName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error){
            console.log('error catching user',error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


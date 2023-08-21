import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: window.env.apiKey,
    authDomain: window.env.authDomain,
    projectId: window.env.projectId,
    storageBucket: window.env.storageBucket,
    messagingSenderId: window.env.messagingSenderId,
    appId: window.env.appId,
    measurementId: window.env.measurementId
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const auth = getAuth();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            localStorage.setItem('user', JSON.stringify(user));
        }).catch((error) => {
            // Handle Errors here.
            const displayError = {
                errorCode: error.code,
                errorMessage: error.message,
                email: error.customData.email,
                credential: GoogleAuthProvider.credentialFromError(error)
            }

            console.log(displayError);
            // ...
        });
}

//

export const signUserOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


export default firebaseApp;
import {initializeApp} from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink
} from 'firebase/auth'
import { setEmailForSignIn} from "./LocalStorage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  'login_hint': ''
});

const twitterAuthProvider = new TwitterAuthProvider();

const sendEmailLink = async (email: string, redirectBackUrl: string) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: redirectBackUrl,
    // This must be true.
    handleCodeInApp: true,
  };

  return new Promise((resolve, reject) => {
    sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
      .then(() => {
        setEmailForSignIn(email);
        resolve(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        reject(error)
      });
  })


}

const isLinkSignIn = (_window: any) => {
  return isSignInWithEmailLink(firebaseAuth, _window.location.href);
}

const validateSignIn: any = async (email: string, _window: any) => {
  return new Promise((resolve, reject) => {
    signInWithEmailLink(firebaseAuth, email, _window.location.href)
      .then((result) => {
        resolve({user: result.user})
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
        reject(error)
      });

  })
}

export {
  firebaseAuth,
  googleAuthProvider,
  twitterAuthProvider,
  sendEmailLink,
  isLinkSignIn,
  validateSignIn
}

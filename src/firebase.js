import {initializeApp} from "firebase/app"
import {getAuth, FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth"

const auth = getAuth(initializeApp({
    apiKey: "AIzaSyCre4FEP7yOKVS9id-mOEpEoD1dL8PJwQI",
    authDomain: "unichat-1b5f1.firebaseapp.com",
    projectId: "unichat-1b5f1",
    storageBucket: "unichat-1b5f1.appspot.com",
    messagingSenderId: "276888917298",
    appId: "1:276888917298:web:205b43a7fb4515f9cdb32b"
}))
const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()
export {
    auth,
    facebookProvider,
    googleProvider,
}
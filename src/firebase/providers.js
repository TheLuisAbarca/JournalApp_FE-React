import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        // console.log( {credential} );
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error){
        const errorCode = error.code;
        const errorMessage = error.message;

    
        return {
            ok: false,
            errorMessage, errorCode
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {

        const answer = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = answer.user
        console.log(answer);
        // ToDo: Update displayName in Firebase.

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }
}
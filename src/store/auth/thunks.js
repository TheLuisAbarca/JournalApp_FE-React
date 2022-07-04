import { signInWithGoogle } from "../../firebase/providers";
import { checkinCredentials } from "./";
export const checkingAuthentication = ( email, password ) => { 
    return async( dispatch ) => {
        dispatch( checkinCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkinCredentials() );
        signInWithGoogle();
    }
}
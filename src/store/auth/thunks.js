import { signInWithGoogle } from "../../firebase/providers";
import { checkinCredentials, logout, login } from "./";
export const checkingAuthentication = ( email, password ) => { 
    return async( dispatch ) => {
        dispatch( checkinCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkinCredentials() );
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch( logout( result.errorMessage) );
        dispatch( login(result) );
    }
}
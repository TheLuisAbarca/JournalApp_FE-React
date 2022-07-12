import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword } from "../../firebase/providers";
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

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkinCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName});
        if ( !ok ) return dispatch(logout({ errorMessage }));
        dispatch( login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkinCredentials() );
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch( logout( result ) );
        dispatch( login(result) ); 
    }
}

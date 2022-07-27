import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkinCredentials, logout, login } from "./";
import { clearNotesLogout } from '../journal';
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

export const startLogOut = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}

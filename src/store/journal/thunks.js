import { collection, doc, setDoc } from "firebase/firestore/lite";
import { CloudFirestore } from '../../firebase/config'
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote() );
        
        const { uid } = getState().auth;
        // uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( CloudFirestore, `${uid}/journal/notes` ));
        const setDocAnsw = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        // dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ));
    }
}
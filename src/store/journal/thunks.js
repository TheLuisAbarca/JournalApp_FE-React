import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { CloudFirestore } from '../../firebase/config'
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

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

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('User UID does not exist.');
        const notes = await loadNotes( uid );
        dispatch ( setNotes(notes) );
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteToFirestore = {
            ...note
        };
        delete noteToFirestore.id;
        const docRef = doc( CloudFirestore, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFirestore, { merge: true });
        dispatch( updateNote(note) );
    }
}
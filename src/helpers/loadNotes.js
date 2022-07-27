import { collection, getDocs } from "firebase/firestore/lite";
import { CloudFirestore } from "../firebase/config";

export const loadNotes = async( uid= '') => {
    if ( !uid ) throw new Error('User UID does not exist.');

    const collectionRef = collection( CloudFirestore, `${ uid }/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach( doc => {
        notes.push({id: doc.id, ...doc.data()});
    });

    console.log(notes);
    return notes;
}
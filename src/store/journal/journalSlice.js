import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null
       // active: {
       //      id: 'abc123',
       //      title: '',
       //      body: '',
       //      date: 123456,
       //      imageUrls: [],
       // }
   },
   reducers: {
       savingNewNote: () => {
            state.isSaving = true;
       },
       addNewEmptyNote: (state, action ) => {
           state.notes.push(action.payload);
           state.isSaving = false;
       },
       setActiveNote: (state, action ) => {
            state.active = action.payload;
       },
       setNotes: (state, action ) => {
        
       },
       setSaving: ( state ) => {
        
       },
       updateNote: (state, action ) => {
        
       },
       deleteNoteById: (state, action ) => {
        
       },
   }
});


// Action creators are generated for each case reducer function
export const { 
                addNewEmptyNote,
                setActiveNote,
                setNotes,
                setSaving,
                updateNote,
                deleteNoteById } = journalSlice.actions;
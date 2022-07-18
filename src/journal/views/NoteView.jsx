import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks'
import { setActiveNote, startSaveNote } from '../../store/journal'
import { ImageGallery } from '../components'

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );
    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    }, [formState])
    
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

  return (
    <Grid container
        className='animate__animated animate__fadeIn animate__faster'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
        </Grid>
        <Grid item>
            <Button
                onClick={ onSaveNote }
                color="primary"
                sx={{ padding: 2 }}
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Write a title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={5}
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>
        { /* Image Gallery */}
        <ImageGallery />
    </Grid>
  )
}

import { useDispatch, useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  email: 'labarca@google.com',
  password: '123456',
  displayName: 'Luis Abarca'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Mail must have an @.'],
  password: [ (value) => value.length >= 6, 'Password must have more than 6 characters.'],
  displayName: [ (value) => value.length >= 1, 'Name is mandatory.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth);

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);
    if ( !isFormValid ) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={ 12 } sx={{mt: 2 }}>
            <TextField
               label="Full Name"
               type="text"
               placeholder="John Doe"
               fullWidth
               name="displayName"
               value={ displayName }
               onChange={ onInputChange }
               error={ !!displayNameValid && formSubmitted }
               helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{mt: 2 }}>
            <TextField
               label="Mail"
               type="email"
               placeholder="mail@google.com"
               fullWidth
               name="email"
               value={ email }
               onChange={ onInputChange }
               error={ !!emailValid && formSubmitted }
               helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{mt: 2 }}>
            <TextField
               label="Password"
               type="password"
               placeholder="Password"
               fullWidth
               name="password"
               value={ password }
               onChange={ onInputChange }
               error={ !!passwordValid && formSubmitted }
               helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{mb: 2 , mt: 1 }}>
            <Grid 
              item
              xs={ 12 }
              display={ !!errorMessage ? '': 'none' }
            >
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>
            <Grid item xs={ 12 }>
              <Button
                disabled={ isCheckingAuthentication }
                type="submit"
                variant='contained'
                fullWidth
                >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Log In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

export const LoginPage = () => {

  const {email, password, onInputChange } = useForm({
    email: 'arclaav.adm@gmail.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  }

  const onGoogleSignIn = () => {
    console.log('OnGoogleSignIn')
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{mt: 2 }}>
            <TextField
               label="Mail"
               type="email"
               placeholder="mail@google.com"
               fullWidth
               name="email"
               value={ email }
               onChange={ onInputChange }
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
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{mb: 2 , mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

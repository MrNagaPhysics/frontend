import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//  paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//  },
//  avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//  },
//  form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//  },
//  submit: {
//     margin: theme.spacing(3, 0, 2),
//  },
// }));

export default function Login() {
//  const classes = useStyles();

 return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <Box>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                 {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
    </Grid>
 );
}
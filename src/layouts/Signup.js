import React from 'react';

//Material ui components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import { sizing } from '@material-ui/system';

//External library for phone input
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Iberica Contemporánea
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
/*const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/signup") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/signup" to="/signup/1" />
  </Switch>
);*/
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  countryList: {
    ...theme.typography.body1,
  },
  phonefield: {
    margin: '10px 0',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');
  const [value, setValue] = React.useState('')

  const handleBirthChange = event => {
    setGender(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography  variant="caption" color="textSecondary">
                El correo electrónico y la contraseña proporcionados son para iniciar sesión en el sistema y ver información relacionada a los cursos. En caso de ser padre de familia y se esté registrando a un menor, favor de hacer click AQUÍ
              </Typography>
            </Grid>
          </Grid>

        </form>
        </div>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">

          Información Adicional
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="first_lastName"
                label="Apellido Paterno"
                name="first_lastName"
                autoComplete="apellido1"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="second_lastName"
                label="Apellido Materno"
                name="second_lastName"
                autoComplete="apellido2"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl  fullWidth="true">
                  <InputLabel id="demo-simple-select-label">Género</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    value={gender}
                    onChange={handleBirthChange}
                  >
                    <MenuItem value={1}>M</MenuItem>
                    <MenuItem value={2}>F</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PhoneInput
              placeholder="Enter phone number"
              value={value}
              autoFocus
              onChange={setValue}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField id="birthdate" height="70%" label="Cumpleaños" fullWidth="true" type="date" defaultValue="2000-01-01"/>
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="http://localhost:3000/admin/user"
            target="_self"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

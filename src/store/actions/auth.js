import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = token =>{
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error =>{
  return{
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return{
    type: actionTypes.AUTH_LOGOUT
  };
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://localhost:8000/api/auth/login/',{
      username: username,
      password: password
    })
    .then(res => {
      const token = res.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));

    })
    .catch(err => {
      dispatch(authFail(err))
    })
  }
}

export const authSignup = (
  email,
  username,
  password,
  nombre,
  apellido_materno,
  apellido_paterno,
  cumpleanos,
  sexo,
  telefono,
  pais,
  estado,
  colonia,
  calle,
  numero,
  codigo_postal,
  alergia,
  tipo_de_sangre
  ) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://localhost:8000/api/users/',{
      email:email,
      username: username,
      password: password,
      nombre:nombre,
      apellido_materno:apellido_materno,
      apellido_paterno:apellido_paterno,
      cumpleanos:cumpleanos,
      sexo:sexo,
      telefono:telefono,
      pais:pais,
      estado:estado,
      colonia:colonia,
      calle:calle,
      numero:numero,
      codigo_postal:codigo_postal,
      alergia:alergia,
      tipo_de_sangre:tipo_de_sangre
    })
    .then(res => {
      const token = res.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));

    })
    .catch(err => {
      dispatch(authFail(err))
    })
  }
}

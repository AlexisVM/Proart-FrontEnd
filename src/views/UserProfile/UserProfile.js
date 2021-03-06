/* eslint-disable react/no-unescaped-entities */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useSelector } from "react-redux";

import avatar from "assets/img/corazon.jpg";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles(styles);

export default function UserProfile() {
  const user = useSelector(state => state.authentication.user);
  console.log(user);
  const [gender, setGender] = React.useState(user.sexo);
  const handleChange = event => {
    setGender(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Actualiza la información de tu cuenta
              </h4>
              <p className={classes.cardCategoryWhite}>Perfil</p>
            </CardHeader>
            <CardBody>
              <Grid container spacing={3}>
                {/*<Grid item xs={12}>
                  <GridContainer justify="center" alignItems="center" >
                    <CardHeader color="warning">
                      <h4 className={classes.cardTitleWhite}>Información personal</h4>
                    </CardHeader>
                  </GridContainer >
                </Grid>*/}
                <Grid item xs={4}>
                  <TextField id="name" label={user.nombre} fullWidth={true} />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="lastname"
                    label={user.apellido_paterno}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="lastname2"
                    label={user.apellido_materno}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="email" label={user.email} fullWidth={true} />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="birthdate"
                    label="Cumpleaños/Birthday"
                    fullWidth={true}
                    type="date"
                    defaultValue={user.cumpleanos}
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth={true}>
                    <InputLabel id="demo-simple-select-label">
                      Genero/Gender
                    </InputLabel>
                    <Select
                      label="gender"
                      id="gender"
                      value={gender}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>M</MenuItem>
                      <MenuItem value={2}>F</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/*<Grid item xs={12}>
                  <GridContainer justify="center" alignItems="center" >
                    <CardHeader color="warning">
                      <h4 className={classes.cardTitleWhite}>Dirección</h4>
                    </CardHeader>
                  </GridContainer>
                </Grid>*/}
                <Grid item xs={12} sm={5}>
                  <TextField
                    id="street"
                    label="Calle y número"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="suburb" label="Colonia" fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="zipCode"
                    label="Código postal "
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="city" label="Ciudad" fullWidth={true} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="state" label="Estado" fullWidth={true} />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="country" label="País" fullWidth={true} />
                </Grid>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary">Actualizar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <p className={classes.description}>
                La información proporcionada será utilizada únicamente por
                "Ibérica Contemporánea" para identificar a sus participantes,
                conocer sus niveles, sus instituciones y poder utilizarla para
                entregar un certificado al finalizar el festival.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

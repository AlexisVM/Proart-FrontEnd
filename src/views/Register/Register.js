import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from "../../actions";
import Button from "@material-ui/core/Button";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const programas = useSelector(state => state.tiposprogramas);
  const [programa, setPrograma] = useState();
  const [nivel, setNivel] = useState();
  const [grupo, setGrupo] = useState();
  const [paquete, setPaquete] = useState();

  React.useEffect(() => {
    dispatch(userActions.getAllTiposDePrograma());

    },[dispatch]);

function handleProgramaChange(e) {
      setPrograma(programas.items[e.target.value]);
      setNivel(null);
  }
function handleNivelChange(e) {
      setNivel(programa.niveles[e.target.value]);
      setGrupo(null);
  }

function handleGrupoChange(e){
    setGrupo(nivel.grupos[e.target.value]);
}


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Inscríbete a un curso</h4>
           
          </CardHeader>
          <CardBody>
          <select  onChange={handleProgramaChange}>
          <option
         
          value={0}
        >
          -
        </option>
      {programas.items ? programas.items.map((item,index) => (
        <option
          key={item.id}
          value={index}
        >
          {item.nombre}
        </option>
      )): <p>ok</p>}
    </select>


    <select onChange={handleNivelChange}>
    <option
          
          value={0}
        >
          -
        </option>
      {programa ? programa.niveles.map((item,index) => (
        <option
          key={item.id}
          value={index}
        >
          {item.nombre}
        </option>
      )): <p>ok</p>}
    </select>

     <select onChange={handleGrupoChange}>
     <option
         
          value={0}
        >
          -
        </option>
      {nivel ? nivel.grupos.map((item,index) => (
        <option
          key={item.id}
          value={index}
        >
          {"Hora de inicio: "+item.inicio+" Hora final: "+item.final + " Maestro: " + item.maestro[0].nombre}
        </option>
      )): <p>ok</p>}
    </select>


    <Button
              //type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
             
            >
            Inscribirse
            </Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Profesor(props) {
  return (
    <>
      <div className="RamaProfesor">
        <h4>{props.Departament}</h4>
        <img src={props.img} alt="teacher" className="PozaProfesor"></img>
        <p>{props.functie}</p>
        <ListGroup variant="flush">
          <ListGroup.Item className="ContacteProfesor">
           Email: {props.email}
          </ListGroup.Item>
          <ListGroup.Item className="ContacteProfesor">
            Telefon: {props.telefon}
          </ListGroup.Item>
          <ListGroup.Item className="ContacteProfesor">
           Adresa: {props.adresa}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
export default Profesor;

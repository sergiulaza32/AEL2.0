import React from "react";
import { Card, Button } from "react-bootstrap";

function Stire(props) {
    return (
        <Card.Body className="stire-body">
            <Card.Title className="titlu-stire"><h2>{props.title}</h2></Card.Title>
            <Card.Text className="text-stire">
               {props.content.substring(0,200)}
            </Card.Text>
            <Button variant="primary" className="buton-stire">Mai multe...</Button>
        </Card.Body>
    );
}

export default Stire;
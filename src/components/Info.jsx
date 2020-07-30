import React from "react";
import { Card, Button } from "react-bootstrap";

function Info(props) {
    return (
        <Card.Body className="educatie-body">
            <Card.Title><h2>{props.title}</h2></Card.Title>
            <Card.Text>
               {props.content.substring(0,200)}
            </Card.Text>
            <Button variant="primary">Mai multe...</Button>
        </Card.Body>
    );
}

export default Info;
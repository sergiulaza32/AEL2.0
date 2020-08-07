import React from "react";
import {Button} from "react-bootstrap";

function Curs (props) {
   return <Button variant="primary" size="lg" href={props.href}>{props.tip} {props.number}</Button>
}
export default Curs;
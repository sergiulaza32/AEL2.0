import React from "react";
import Content from "./Content";
import {Card} from "react-bootstrap";
import Info from "./Info";

function Educatie() {
    return (
        <>
        <Content 
        title="Educatie" 
        description="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
        Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
        Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"
        />
        <Card className="card-educatie">
            <Info title="Licenta" content="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"/>
            <Info title="Master" content="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"/>
            
        </Card>
        </>


    );
}
export default Educatie;
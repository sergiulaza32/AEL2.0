import React from "react";
import Content from "./Content"
import {Card} from "react-bootstrap";
import Stire from  "./Stire";
function Stiri() {
    return (
        <>
        <Content
            title="Stiri si noutati"
        />
        <Card className="card-stire">
            <Stire 
            title="Stire 01"
            content="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"/>
            <Stire 
            title="Stire 02"
            content="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"/>
            <Stire 
            title="Stire 03"
            content="Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut
            Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut Continut"/>
        </Card>
        </>

    );
}
export default Stiri;
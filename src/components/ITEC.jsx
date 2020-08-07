import React from "react";
import SlideShow from "./Carousel";
import {Button} from "react-bootstrap";

function ITEC(){
    return (
        <>
        <Button variant="primary" size="lg">Inapoi la "Cercetare"</Button>
        <h1 style={{marginTop:"10px", marginBottom:"10px"}}>ITEC</h1>
        <SlideShow />
        </>
    )
}
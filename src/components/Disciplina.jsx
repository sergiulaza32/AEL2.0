import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Disciplina(props){
    return (
        <div className="disciplina">
            <h3>{props.title}</h3>
            <img className="logo-disciplina" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxs_5dwUwJwYPzHLXZ1zDZuHTr4UMgL5rgdA&usqp=CAU" alt="book"/>
        </div>
    );
}

export default Disciplina;
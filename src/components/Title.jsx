import React from "react";

function Title(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <img src={props.logo} className="title-logo"></img>
                </div>
                <div className="col-sm-9 title">
                    <h2>{props.header1}</h2>
                    <h3>{props.header2}</h3>
                </div>
            </div>
        </div>
    );
}

export default Title;
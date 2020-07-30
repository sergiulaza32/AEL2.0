import React from "react";
import Content from "./Content";
import Disciplina from "./Disciplina";

function Materiale() {
    return (
        <>
            <Content
                title="Materiale didactice"
            />
            <div className="container">
                <div className="row rand">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 01" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 02" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 03" />
                    </div>

                </div>
                <div className="row rand">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 04" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 05" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 06" />
                    </div>

                </div>
                <div className="row rand">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 07" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 08" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Disciplina title="Disciplina 09" />
                    </div>

                </div>
            </div>

        </>

    );
}
export default Materiale;
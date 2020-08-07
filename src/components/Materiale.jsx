import React from "react";
import Content from "./Content";
import Disciplina from "./Disciplina";
import { Link } from "react-router-dom";

function Materiale() {
    return (
        <>
            <Content
                title="Materiale didactice"
            />
            <div className="container">
                <div className="row justify-content-start rand">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link to="/cursuri"><Disciplina title="Disciplina 01" /></Link>
                    </div>

                </div>


            </div>

        </>

    );
}
export default Materiale;
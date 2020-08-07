import React from "react";
import Curs from "./Curs";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
function Cursuri() {
    return (
        <>
        <Link to="/materiale"><Button id="butonCursuri" variant="primary" size="lg"> Inapoi la discipline</Button></Link>
            <h2 style={{marginTop:"30px"}}>Cursuri</h2>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="01" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="02" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="03" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="04" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="05" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="06" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="07" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="08" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="09" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="10" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="11" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Curs" number="12" />
                    </div>
                </div>
            </div>

            <h2 style={{
                marginTop:"20px",
                marginBottom:"20px"
            }}>Laboratoare</h2>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="01" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="02" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="03" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="04" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="05" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="06" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="07" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="08" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="09" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="10" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="11" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 curs">
                        <Curs tip="Lab" number="12" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cursuri;
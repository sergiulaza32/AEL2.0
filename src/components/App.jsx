import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Title";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Stiri from "./Stiri";
import Educatie from "./Educatie";
import Materiale from "./Materiale";
import Cercetare from "./Cercetare";
import Personal from "./Personal";
import Contact from "./Contact";
import Licenta from "./Licenta";
function App() {
    return (

        <div className="mainPage">
            <Router>
                <Title
                    logo="https://design-industrial.utcluj.ro/images/logoutcn.jpg"
                    header1="Departamentul de Electronica Aplicata"
                    header2="Universitatea Tehnica Cluj-Napoca" />

                <MenuBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/stiri" component={Stiri} />
                    <Route path="/educatie" component={Educatie} />
                    <Route path="/materiale" component={Materiale} />
                    <Route path="/cercetare" component={Cercetare} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/educatie/licenta" component={Licenta} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Title from "./Title";
import MenuBar from "./MenuBar";
import SlideShow from "./Carousel";
import Home from "./Home";
import Stiri from "./Stiri";
import Educatie from "./Educatie";
import Materiale from "./Materiale";
import Cercetare from "./Cercetare";
import Personal from "./Personal";
import Contact from "./Contact";
function App() {
    return (

        <div className="mainPage">
            <Title
                logo="https://design-industrial.utcluj.ro/images/logoutcn.jpg"
                header1="Departamentul de Electronica Aplicata"
                header2="Universitatea Tehnica Cluj-Napoca" />
           
            <MenuBar />
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home} />
                <Route path="/stiri" component={Stiri} />
                <Route path="/educatie" component={Educatie}/>
                <Route path="/materiale" component={Materiale}/>
                <Route path="/cercetare" component={Cercetare}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/contact" component={Contact}/>
            </Router>

        </div>
    );
}

export default App;
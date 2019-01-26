import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {  
        return (
            <nav>
                <div className="nav-wrapper green">
                    <a href="#" className="brand-logo center">Google books search</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/saved">Saved</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
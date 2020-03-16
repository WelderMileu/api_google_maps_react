import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark">
                    <div className="container">
                        <div className="navbar-brand">
                            <a href="#" className="text-uppercase text-warning font-weight-semibold">ReactJS Router</a>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link text-white text-uppercase" to="/">App</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white text-uppercase" to="/Abunt">Abunt</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
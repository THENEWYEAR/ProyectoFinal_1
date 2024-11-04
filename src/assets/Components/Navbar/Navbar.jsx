import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src="src/Images/generico2.png" alt="logo"/>
            <div className="navbar-logo"></div>
            <h1 className="Til">TecnoDescuentos</h1>
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <a href="">Inicio</a>
                <a href="">Shop</a>
                <a href="">Servicios</a>
                <a href="">Contacto</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;

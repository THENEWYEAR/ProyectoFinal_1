import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src="src/assets/Images/4.png" alt="logo"/></div>
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <a href="">Inicio</a>
                <a href="">Nosotros</a>
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

import React, { useState } from "react"
import "../navbar/navbar.css"
import logoNovoclick from "../../assets/logonovoclick.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    let [opened, setOpened] = useState(false);
    return (
        <div className="navbar">
            <FontAwesomeIcon onClick={() => setOpened(!opened)} className='nav-bar-icon' icon={faBars} />
            <div className="leftSide">
                <img alt='logo' src={logoNovoclick} />
            </div>
            <div className={`rigthSide ${opened ? 'rightSide-shown' : ''}`}>
                <div className="linksnav">
                    <a href="/nosotros">NOSOTROS</a>
                    <a href="/platosdigitales">PLATOS DIGITALES</a>
                    <a href="chef digitales">CHEFS DIGITALES</a>
                    <a href="/clientes">CLIENTES</a>
                    <a href="/academia">ACADEMIA NOVOCLIK</a>
                    <a href="/blog">BLOG</a>
                    <a href="/contacto">CONTACTO</a>
                </div>
            </div>
        </div>
    )

}
export default NavBar;

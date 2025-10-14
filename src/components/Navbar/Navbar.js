import React, {useState} from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar(onLogout) {
    return (
        <nav className="Navbar">
            <h2>Agenda</h2>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/cadastro">Cadastrar</link></li>
                <li><link to="/lista">Listar Contatos</link></li>
                <li><button onClick={onLogout}>Sair</button></li>
            </ul>
        </nav>
    );
}
export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <NavLink exact to="/" className="ed-grid">
                    <img className="main-logo" src="https://www.flaticon.com/svg/static/icons/svg/304/304576.svg" alt="Logo" />
                    {/* <h3>Sistema de Registro</h3> */}
                </NavLink>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="activo"> Inicio </NavLink></li>
                        <li><NavLink to="/proceso" activeClassName="activo"> Procesos </NavLink></li>
                        <li><NavLink to="/criminal" activeClassName="activo"> Criminales </NavLink></li>
                        <li><NavLink to="/reporte" activeClassName="activo"> Reportes </NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l active" id="main-menu-toggle">
                </div>
            </div>
        </div>
    </header>
);

export default MainMenu;
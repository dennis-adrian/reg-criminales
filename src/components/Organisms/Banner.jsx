import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="main-banner img-container dark-color" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="Imagen del Banner" src="https://images.pexels.com/photos/139309/pexels-photo-139309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Sistema de Registro para Juzgados</p>
                        <Link to="/proceso" className="button">Ver Procesos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;
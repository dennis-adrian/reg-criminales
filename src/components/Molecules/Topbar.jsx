import React from 'react'
import { Link } from 'react-router-dom';

const Topbar = ({ page, subpage }) => {
    return (
        <div className="topbar dark-color">
            <div className="ed-grid m-grid-2">
                <p className="s-mb-1 m-mb-0 s-center m-left">{page} {'>'} {subpage}</p>
                {
                    page === 'Procesos'
                        ?
                        <Link to="/proceso/nuevo" className="button button--cta button--tiny s-to-center m-to-right">Agregar {page}</Link>
                        :
                        <Link to="/criminal/nuevo" className="button button--cta button--tiny s-to-center m-to-right">Agregar {page}</Link>
                }
            </div>
        </div>
    )
}

export default Topbar;

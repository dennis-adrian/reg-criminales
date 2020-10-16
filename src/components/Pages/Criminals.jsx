import React from 'react';
import moment from 'moment';
import CriminalsTable from '../Molecules/CriminalsTable';
import Topbar from '../Molecules/Topbar';

const Criminals = () => {

    return (
        <>
            <Topbar page='Criminales' subpage='Lista de Criminales' />
            <div className="ed-grid">
                <h1 id="elemento">Lista de Criminales</h1>
                <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
                <CriminalsTable />
            </div>
        </>
    )
}

export default Criminals;

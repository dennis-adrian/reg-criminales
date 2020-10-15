import React from 'react';
import moment from 'moment';
import { useFetchCriminals } from '../../hooks/useFetchCriminals';
import CriminalsTable from '../Molecules/CriminalsTable';
import Topbar from '../Molecules/Topbar';

const Criminals = () => {
    const { data: criminales, loading } = useFetchCriminals();

    return (
        <>
            <Topbar page='Criminales' subpage='Lista de Criminales' />
            <div className="ed-grid">
                <h1 id="elemento">Lista de Criminales</h1>
                <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
                {loading
                    ? <p className="animate__animated animate__flash">Loading...</p>
                    : <CriminalsTable criminales={criminales} />
                }
            </div>
        </>
    )
}

export default Criminals;

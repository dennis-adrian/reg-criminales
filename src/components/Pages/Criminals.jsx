import React from 'react';
import { useFetchCriminals } from '../../hooks/useFetchCriminals';
import CriminalsTable from '../Molecules/CriminalsTable';
import Topbar from '../Molecules/Topbar';

const Criminals = () => {
    const { data: criminales, loading } = useFetchCriminals();

    return (
        <>
            <Topbar page='Criminales' subpage='Lista de Criminales' />
            {loading
                ? <p className="animate__animated animate__flash">Loading...</p>
                : <CriminalsTable criminales={criminales} />
            }
        </>
    )
}

export default Criminals;

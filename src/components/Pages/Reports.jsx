import React from 'react';
import { useFetchCriminals } from '../../hooks/useFetchCriminals';
import CriminalsTable from '../Molecules/CriminalsTable';

const Reports = () => {
    const { data: criminales, loading } = useFetchCriminals();
    return (
        <div>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <CriminalsTable criminales={criminales} page='reports' />
        </div>
    )
}

export default Reports;

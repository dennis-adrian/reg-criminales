import React, { useState } from 'react';
import moment from 'moment';
import CriminalsTable from '../Molecules/CriminalsTable';
//import pdfReportGenerator from '../../helpers/pdfReportGenerator';
import AddFilters from '../Molecules/AddFilters';
const Reports = () => {

    const [filters, setFilters] = useState({})

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     pdfReportGenerator(criminales);
    // }

    return (
        <div className='ed-grid'>
            <h1 id="elemento">Reportes de Criminales</h1>
            <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
            <div className="ed-container">
                <AddFilters setFilters={setFilters} />
                {/* <div className="ed-item l-30 form__item">
                    <button className="button full" onClick={handleClick}>Descargar en PDF</button>
                </div> */}
                <div>
                    {
                        filters.country === 'Todos' && setFilters({
                            ...filters,
                            country: undefined,
                            reqType: 3,
                        })
                    }
                    <CriminalsTable filters={filters} page='reports' />
                </div>
            </div>
        </div>
    )
}

export default Reports;

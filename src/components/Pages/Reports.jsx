import React, { useState } from 'react';
import moment from 'moment';
import { useFetchCriminals } from '../../hooks/useFetchCriminals';
import CriminalsTable from '../Molecules/CriminalsTable';
import pdfReportGenerator from '../../helpers/pdfReportGenerator';
import CountrySelect from '../Atoms/CountrySelect';
const Reports = () => {
    const [filters, setFilters] = useState({
        country: '',
        minAge: '',
        maxAge: '',
    })

    const { data: criminales, loading } = useFetchCriminals();
    
    const handleFilters = (e) => {
        e.preventDefault();
    }

    const handleClick = (e) => {
        e.preventDefault();
        pdfReportGenerator(criminales);
    }

    return (
        <div className='ed-grid'>
            <h1 id="elemento">Reportes de Criminales</h1>
            <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
            <div className="ed-container">
            <div className="ed-item l-50 form__item">
                    <label htmlFor="country">País de Origen</label>
                    <CountrySelect
                        value={filters.country}
                        onChange={e => setFilters({
                            ...filters,
                            country: e.target.options[e.target.selectedIndex].text
                        })}
                    />
                </div>
                <div className="ed-item l-20 form__item">
                    <label htmlFor="minAge">Edad mínima</label>
                    <input
                        type="number"
                        id="minAge"
                        value={filters.minAge}
                        onChange={e => setFilters({
                            ...filters,
                            minAge: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-20 form__item">
                    <label htmlFor="maxAge">Edad máxima</label>
                    <input
                        type="number"
                        id="maxAge"
                        value={filters.maxAge}
                        onChange={e => setFilters({
                            ...filters,
                            maxAge: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-60 form__item">
                    <button className="button full" onClick={handleFilters}>Filtrar</button>
                </div>
                <div className="ed-item l-30 form__item">
                    <button className="button full" onClick={handleClick}>Descargar en PDF</button>
                </div>
                <div>
                    {loading && <p className="animate__animated animate__flash">Loading...</p>}
                    <CriminalsTable criminales={criminales} page='reports' />
                </div>
            </div>
        </div>
    )
}

export default Reports;

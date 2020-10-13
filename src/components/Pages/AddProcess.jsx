import moment from 'moment';
import React from 'react'
import FormAdd from '../Organisms/FormAddProcess';

const AddProcess = () => {
    return (
        <div className="ed-grid">
            <h1 id="elemento">Agregar Proceso</h1>
            <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
            <FormAdd />
        </div>
    )
}

export default AddProcess;

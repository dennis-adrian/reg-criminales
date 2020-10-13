import React from 'react';
import moment from 'moment';
import FormAddCriminal from '../Organisms/FormAddCriminal';

const AddCriminal = () => {
    return (
        <div className="ed-grid">
            <h1 id="elemento">Agregar Criminal</h1>
            <h4 id="fecha">Fecha: {moment().format('LL')}</h4>
            <FormAddCriminal />
        </div>
    )
}

export default AddCriminal;

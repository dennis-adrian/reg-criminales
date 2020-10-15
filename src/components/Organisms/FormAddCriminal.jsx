import React from 'react';
import CountrySelect from '../Atoms/CountrySelect';

const FormAddCriminal = () => {
    return (
        <form action="">
            <div className="ed-container">
                <div className="ed-item l-50 form__item">
                    <label htmlFor="names">Nombres</label>
                    <input type="text" id="names" />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="lastNames">Apellidos</label>
                    <input type="text" id="lastNames" />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="ci">Cédula de Identidad</label>
                    <input type="text" id="ci" />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="country">País de Origen</label>
                    <CountrySelect />
                </div>
                <div className="ed-item l-35 form__item">
                    <label htmlFor="birthDate">Fecha de Nacimiento</label>
                    <input type="date" id="birthDate" />
                </div>
                <div className="ed-item l-30 form__item">
                    <label htmlFor="gender">Género</label>
                    <input type="text" id="gender" />
                </div>
                <div className="ed-item l-35 form__item">
                    <label htmlFor="phoneNumber">Teléfono</label>
                    <input type='tel' id="phoneNumber" />
                </div>
                <div className="ed-item form__item">
                    <button className="button full">
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    )
}
export default FormAddCriminal;

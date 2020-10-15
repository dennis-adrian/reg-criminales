import React from 'react';
import CountrySelect from '../Atoms/CountrySelect';

const FormAddCriminal = () => {

    const handleSubmit = (e) => {
        //prevenir el comportamiento por defecto del form
        //es decir, prevenir que se recarge
        e.preventDefault();
        console.log('se hizo un submit');
        // if (inputValue.trim().length > 2) {
            
        //     //categs representa el valor inicial
        //     //el valor del arreglo categories
        //     //que se encuentra en el componoente GifExpertApp
        //     //y a ese valor le agregamos el input value
        //     setCategories(categs => [inputValue, ...categs]);
        //     setInputValue('');
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    <input className='button full' type='submit' value='Guardar' />
                </div>
            </div>
        </form>
    )
}
export default FormAddCriminal;

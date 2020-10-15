import React, { useRef, useState } from 'react';
import { postCriminal } from '../../helpers/postCriminal';
import CountrySelect from '../Atoms/CountrySelect';

const FormAddCriminal = () => {

    // const criminal = {
    //     tipo: "criminal",
    //     nombres: "Dario",
    //     apellidos: "Mendoza",
    //     fechaNacimiento: "1998-03-02",
    //     paisOrigen: "Argentina",
    //     ci: "4524355",
    //     telefono: "78999887",
    //     genero: "masculino"
    // }

    const [criminal, setCriminal] = useState({
        tipo: 'criminal',
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        paisOrigen: 'Bolivia',
        ci: '',
        telefono: '',
        genero: 'Masculino'
    });

    const clearState = () => {
        setCriminal({
            tipo: 'criminal',
            nombres: '',
            apellidos: '',
            fechaNacimiento: '',
            paisOrigen: 'Bolivia',
            ci: '',
            telefono: '',
            genero: 'Masculino'
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postCriminal(criminal);
        clearState();
    }

    return (
        <form id='formAdd' onSubmit={handleSubmit}>
            <div className="ed-container">
                <div className="ed-item l-50 form__item">
                    <label htmlFor="names">Nombres</label>
                    <input
                        type="text"
                        id="names"
                        value={criminal.nombres}
                        onChange={e => setCriminal({
                            ...criminal,
                            nombres: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="lastNames">Apellidos</label>
                    <input
                        type="text"
                        id="lastNames"
                        value={criminal.apellidos}
                        onChange={e => setCriminal({
                            ...criminal,
                            apellidos: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="ci">Cédula de Identidad</label>
                    <input
                        type="text"
                        id="ci"
                        value={criminal.ci}
                        onChange={e => setCriminal({
                            ...criminal,
                            ci: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-50 form__item">
                    <label htmlFor="country">País de Origen</label>
                    <CountrySelect
                        value={criminal.paisOrigen}
                        onChange={e => setCriminal({
                            ...criminal,
                            paisOrigen: e.target.options[e.target.selectedIndex].text
                        })}
                    />
                </div>
                <div className="ed-item l-35 form__item">
                    <label htmlFor="birthDate">Fecha de Nacimiento</label>
                    <input
                        type="date"
                        id="birthDate"
                        value={criminal.fechaNacimiento}
                        onChange={e => setCriminal({
                            ...criminal,
                            fechaNacimiento: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-30 form__item">
                    <label htmlFor="gender">Género</label>
                    <select
                        id="gender"
                        value={criminal.genero}
                        onChange={e => setCriminal({
                            ...criminal,
                            genero: e.target.value
                        })}
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="ed-item l-35 form__item">
                    <label htmlFor="phoneNumber">Teléfono</label>
                    <input
                        type='tel'
                        id="phoneNumber"
                        value={criminal.telefono}
                        onChange={e => setCriminal({
                            ...criminal,
                            telefono: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item form__item">
                    <button className='button full' type='submit' value='Guardar'>Guardar</button>
                </div>
            </div>
        </form>
    )
}
export default FormAddCriminal;

import React, { useState } from 'react';
import CountrySelect from '../Atoms/CountrySelect';

const AddFilters = ({ setFilters }) => {

    const [state, setState] = useState({
        country: 'Todos',
        minAge: 18,
        maxAge: 80,
        reqType: 4
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilters(state);
    }

    return (
        <form id='formAdd' onSubmit={handleSubmit}>
            <div className="ed-container">
                <div className="ed-item l-50 form__item">
                    <label htmlFor="country">País de Origen</label>
                    <CountrySelect
                        value={state.country}
                        onChange={e => setState({
                            ...state,
                            country: e.target.options[e.target.selectedIndex].text
                        })}
                    />
                </div>
                <div className="ed-item l-20 form__item">
                    <label htmlFor="minAge">Edad mínima</label>
                    <input
                        type="number"
                        id="minAge"
                        value={state.minAge}
                        onChange={e => setState({
                            ...state,
                            minAge: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-20 form__item">
                    <label htmlFor="maxAge">Edad máxima</label>
                    <input
                        type="number"
                        id="maxAge"
                        value={state.maxAge}
                        onChange={e => setState({
                            ...state,
                            maxAge: e.target.value
                        })}
                    />
                </div>
                <div className="ed-item l-60 form__item">
                    <button className="button full">Filtrar</button>
                </div>
            </div>
        </form>
    )
}

export default AddFilters;

import React from 'react'

const FormAdd = () => {
    return (
        <form action="">
            <div className="ed-grid m-grid-2">
                <div className="form__item">
                    <label htmlFor="processCode">Código del Proceso</label>
                    <input type="text" id="processCode" />
                </div>
                <div className="form__item">
                    <label htmlFor="crimeCode">Código del Crímen</label>
                    <input type="text" id="crimeCode" />
                </div>
                <div className="form__item">
                    <label htmlFor="processState">Estado del Proceso</label>
                    <input type="text" id="processState" />
                </div>
                <div className="form__item">
                    <label htmlFor="iniDate">Fecha de Inicio del Proceso</label>
                    <input type="date" id="iniDate" />
                </div>
                <div className="form__item">
                    <label htmlFor="endDate">Fecha del Veredicto</label>
                    <input type="date" id="endDate" />
                </div>
                <div className="form__item">
                    <label htmlFor="veredict">Fallo</label>
                    <input type="text" id="veredict" />
                </div>
            </div>
            <div>
                {/* <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span> */}
            </div>
        </form>
    )
}

export default FormAdd

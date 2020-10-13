import React from 'react'
import { Link } from 'react-router-dom';

const CriminalsTable = ({ criminales }) => {
    let counter = 0;
    return (
        <div className="table-container center-content">
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Apellidos</th>
                        <th>Nombres</th>
                        <th>Cédula</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Opciones</th>
                    </tr>
                    {
                        criminales.map(criminal => {
                            counter++;
                            return (
                                <tr key={counter}>
                                    <td>{counter}</td>
                                    <td>{criminal.apellidos}</td>
                                    <td>{criminal.nombres}</td>
                                    <td>{criminal.ci}</td>
                                    <td>{criminal.fechaNacimiento}</td>
                                    <td>
                                        <div className='ed-container'>
                                            <Link to={'criminal/' + criminal._id} className='button button--tiny'>Ver más</Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default CriminalsTable;

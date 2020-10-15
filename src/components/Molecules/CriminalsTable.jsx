import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const CriminalsTable = ({ criminales, page = 'criminals' }) => {
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
                        <th>Genero</th>
                        <th>Fecha de Nacimiento</th>
                        {(page === 'criminals')
                            ?
                            <th>Opciones</th>
                            :
                            <>
                                <th>Pais de Origen</th>
                                <th>Banda(s)</th>
                            </>
                        }
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
                                    <td>{criminal.genero}</td>
                                    <td>{moment(criminal.fechaNacimiento).format('ll')}</td>
                                    {(page === 'criminals')
                                        ?
                                        <td>
                                            <div className='ed-container'>
                                                <Link to={`criminal/${criminal._id}`} className='button button--tiny'>Ver más</Link>
                                            </div>
                                        </td>
                                        :
                                        <>
                                            <td>{criminal.paisOrigen}</td>
                                            <td>{criminal.bandas}</td>
                                        </>
                                    }
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

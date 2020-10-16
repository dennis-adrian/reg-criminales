import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { CriminalInfoCard } from '../Molecules/CriminalInfoCard';
import CriminalPicCard from '../Molecules/CriminalPicCard';

const IndividualCriminal = ({ match }) => {
    const [criminal, setCriminal] = useState({})

    const API = `https://ministeriocrimenes.herokuapp.com/api/criminal/${match.params.id}`;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const { criminal } = data;
                criminal.map(crim => setCriminal(crim))
            })
    }, [API]);

    return (
        <div className="Characters-inner">
            <CriminalPicCard nombres={criminal.nombres} apellidos={criminal.apellidos} imagen={criminal.imagen}/>
            <CriminalInfoCard
                key={criminal.id}
                ci={criminal.ci}
                fechaNacimiento={
                    moment(criminal.fechaNacimiento).format('ll')
                }
                genero={criminal.genero}
                paisOrigen={criminal.paisOrigen}
            />
        </div>
    )
}

export default IndividualCriminal;

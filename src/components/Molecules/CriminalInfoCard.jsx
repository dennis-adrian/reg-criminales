import React from 'react';

export const CriminalInfoCard = ({ ci, fechaNacimiento, genero, paisOrigen }) => (
    <article className="Characters-card">
        <h3>Cédula de Identidad: <span>{ci}</span></h3>
        <h3>Género: <span>{genero}</span></h3>
        <h3>Fecha de Nacimiento: <span>{fechaNacimiento}</span></h3>
        <h3>País de Origen: <span>{paisOrigen}</span></h3>
    </article>
);

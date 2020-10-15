import React from 'react';

const CriminalPicCard = ({ nombres, apellidos }) => (
    <article className="Characters-card">
        <img src='https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png' alt={nombres} />
        <h2>{nombres} {apellidos}</h2>
    </article>
);
export default CriminalPicCard;
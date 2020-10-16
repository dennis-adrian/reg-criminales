import React from 'react';

const CriminalPicCard = ({ nombres, apellidos, imagen }) => {
    return (
        <article className="Characters-card">
            {
                (imagen)
                    ?
                    <img src={imagen} alt={`${nombres} ${apellidos}`} />
                    :
                    <img src='https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png' alt={`${nombres} ${apellidos}`} />
            }
            <h2>{nombres} {apellidos}</h2>
        </article>
    )
};
export default CriminalPicCard;
import React, { useState } from 'react';
import secteurs from '../secteurs.json';

const Secteurs = () => {
    const [active, setActive] = useState(null);
    return (
        <section>
            <h2>Votre secteur d'activité</h2>
            <div className='content-col'>
                {secteurs.secteurs.map(secteur => (
                    <div onClick={(() => setActive(secteur))} className={`${active != null ? 'column-6' : 'column-3'} ${active === '1' ? 'selected' : ''} secteurs-cards`}>
                        <img src={secteur.image} />
                        <h3>{secteur.name}</h3>
                    </div>
                ))}
                {active &&
                    <>
                        <div>
                            <img src={active.image} />
                            <h2>{active.name}</h2>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default Secteurs;

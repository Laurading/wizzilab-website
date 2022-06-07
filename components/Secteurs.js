import React, { useState } from 'react';
import secteurs from '../secteurs.json';

const Secteurs = () => {
    const [active, setActive] = useState(null);
    return (
        <section className='margin'>
            <h2>Votre secteur d'activité</h2>
            <div className='content-col'>
                {secteurs.secteurs.map(secteur => (
                    <div onClick={(() => setActive(secteur))} className={`${active != null ? 'column-6' : 'column-3'} ${active === '1' ? 'selected' : ''} secteurs-cards`}>
                        <img src={secteur.image} />
                        <h3>{secteur.name}</h3>
                    </div>
                ))}
                <div className='content-col'>
                    {active &&
                        <>
                            <div className='column-2'>
                                <img src={active.image} />
                            </div>
                        </>
                    }

                    {active &&
                        <>
                            <div className='column-2'>
                                <div>
                                    <h2>{active.name}</h2>
                                    <p>{active.content}</p>
                                    <div className='savoirplus-content'>
                                        <a className='ensavoirplus-button'>En savoir plus</a>
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                </div>

            </div>
        </section>
    )
}

export default Secteurs;

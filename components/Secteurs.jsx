import React, { useState } from 'react';
import secteurs from '../secteurs.json';
import Link from 'next/link'

const Secteurs = () => {
    const [active, setActive] = useState(null);
    return (
        <section className='section-one'>
            <div className='margin-lr'>
                <h1>La <span className='denim'>Donnée temps réel</span> au service de la <span className='denim'>Performance</span></h1>
                <div className='content-col'>
                    {secteurs.secteurs.map(secteur => (
                        <div onClick={(() => setActive(secteur))} key={secteur.name} className={`${active != null ? 'column-6' : 'column-3'} ${active === '1' ? 'selected' : ''} onhover`}>
                            <img src={secteur.image} />
                            <h4>{secteur.name}</h4>
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
                                        <h3>{active.name}</h3>
                                        <p>{active.content}</p>
                                        <div className='button-content'>
                                            <Link href={active.href}>
                                                <button>En savoir plus</button>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Secteurs;

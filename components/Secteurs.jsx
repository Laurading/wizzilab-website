import React, { useState } from 'react';
import secteurs from '../secteurs.json';
import Link from 'next/link';


const Secteurs = () => {
    const [active, setActive] = useState(null);
    return (
        <section className='lavender-bg'>
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
                                        <div className='content-col margin-top'>
                                            {secteurs.secteurs[active.id - 1].solutions.map(solution => (
                                                <Link href={solution.href} key={solution.name}>
                                                    <div className='column-4 onhover'>
                                                        <div className='padding-lr'>
                                                            <h5 className={`${solution.color}`}>{solution.name}</h5>
                                                            <p className='margin-bottom'>{solution.text}</p>

                                                        </div>
                                                    </div>
                                                </Link>

                                            ))}
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

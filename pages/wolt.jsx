import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wolt() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='margin-lr'>
                    <h2><span className='blue'>WOLT : </span> La solution de RTLS</h2>
                    <img className='solutions-img' src='/img/solutions/wolt.png' />
                    <p>
                        WOLT est une solution de localisation sur site basée sur une infrastructure ultra
                        légère sans câblage.
                        Elle se compose de tags, d’ancres et de gateways. Le tag (capteur) se localise par rapport aux ancres à une fréquence prédéfinie en fonction du cas d’usage. La donnée est envoyée dans le cloud à travers la gateway.
                    </p>
                    <p>
                        <span>3 niveaux de précisions de localisation </span>
                        sont possibles :
                    </p>
                    <ul>
                        <li>Le <span className='red'>positionnement</span>, le plus précis des 3 niveaux, qui permet d&apos;identifier la position exacte de l&apos;actif</li>
                        <li>La <span className='orange'>proximité</span> qui permet de connaître la position approximative d&apos;un tag par rapport aux ancres</li>
                        <li>La <span className='yellow'>présence</span> qui permet de savoir si un actif dans une zone d&apos;intérêt</li>
                    </ul>
                </div>
            </section>

            <section className='lavender-bg'>
                <div className='margin'>
                    <h3>Vos avantages</h3>
                    <div className='content-col'>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/1.svg' />
                            <p className='center'>Localiser les actifs et diminuer les pertes</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/2.svg' />
                            <p className='center'>Installer facilement et rapidement notre système</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/3.svg' />
                            <p className='center'>Identifier les points de congestion et réduire et temps mort</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/4.svg' />
                            <p className='center'>Adapter les besoins de localisation aux différents cas d&apos;usage</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/5.svg' />
                            <p className='center'>Optimiser les déplacements de vos actifs / itinéraires</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/6.svg' />
                            <p className='center'>Améliorer la performance de votre activité</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='margin'>
                <h3>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/1.png' />
                        <h5 className='red'>Ancre</h5>
                        <ul>
                            <li>Sert de repère fix</li>
                            <li>Installation sans cablage</li>
                            <li>Alimentée sur batteries</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/2.png' />
                        <h5 className='blue'>Tags</h5>
                        <ul>
                            <li>Placé sur vos actifs, se repère par rapport ayx ancres</li>
                            <li>Communique avec le Cloud à travers le réseau local IoT crée par la Gateway</li>
                            <li>Alimenté sur batteries</li>
                            <li>Trois tailles / capacités possibles en fonction de l&apos;usage</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/3.png' />
                        <h5 className='green'>Gateway</h5>
                        <ul>
                            <li>Passerelle enre le réseau sans fil local et le Cloud</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/4.png' />
                        <h5 className='yellow'>Cloud</h5>
                        <ul>
                            <li>Ensemble de services virtualisés de localisation et de gestion de la solution</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='lavender-bg'>
                <div className='margin-lr'>
                    <div className='content-col'>
                        <div className='column-2'>
                            <h3>Commander notre kit starter</h3>
                            <p>Notre kit se compose de:</p>
                            <ul>
                                <li>4 ancres</li>
                                <li>2 tags</li>
                                <li>1 gateway</li>
                            </ul>
                            <div className='padding-tb'>
                                <a className="buy-button" href='https://wizzilab.com/shop'>Commander</a>
                            </div>
                        </div>
                        <div className='column-2 padding-tb'>
                            <img src='/img/composants/kit/kitwolt.png' />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

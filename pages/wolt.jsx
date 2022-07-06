import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wolt() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='margin-lr'>
                    <div className='padding-tb'>
                    <h2 className='test-weight'><span className='blue'>WOLT</span></h2>
                    <h2>La solution RTLS autonome, ultra légère et sans fil</h2>
                    </div>
                    <img className='solutions-img' src='/img/solutions/wolt.png' />
                    <p>
                    WOLT est une solution de localisation sur site basée sur une infrastructure ultra légère sans fil. WOLT permet une localisation avec une précision sub-métrique. Les tag ont une options de localisation globale sur le réseau LoRaWAN.
                    {/* <br/>
                    Elle se compose de tags, d&apos;ancres et de gateways. Le tag (capteur) se localise par rapport aux ancres à une fréquence prédéfinie en fonction du cas d’usage. La donnée est envoyée dans le cloud à travers la gateway. */}
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
                    <h3  className='padding-tb'>Vos avantages</h3>
                    <div className='content-col'>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/1.svg' />
                            <p className='center'>Localiser les actifs et diminuer les pertes</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/wolt/2.svg' />
                            <p className='center'>Installer facilement et rapidement notre solution</p>
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
                <h3 className='padding-tb'>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/1.png' />
                        <h5 className='red'>WOLT-ANCHOR : Ancre</h5>
                        <ul>
                            <li>Sert de repère fixe</li>
                            <li>Installation sans cablage</li>
                            <li>Alimentée sur batteries</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/2.png' />
                        <h5 className='blue'>WOLT-S/M/XL : Tags</h5>
                        <ul>
                            <li>Placé sur vos actifs, se repère par rapport ayx ancres</li>
                            <li>Communique avec le Cloud à travers le réseau local IoT crée par la Gateway</li>
                            <li>Alimenté sur batteries</li>
                            <li>Trois tailles / capacités possibles en fonction de l&apos;usage</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/3.png' />
                        <h5 className='green'>WGATE-PRO : Gateway</h5>
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
                            <h3 className='padding-tb'>Commander notre Starter kit</h3>
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
            <section className='margin'>
                    <h3 className='padding-tb'>Ils nous font confiance</h3>
                    <div className='content-col'>
                        <div className='column-4 partenaire'>
                            <img src='/img/partenaires/faurecia.png'/>
                        </div>
                        <div className='column-4 partenaire'>
                            <img src='/img/partenaires/stGobain.png'/>
                        </div>
                        <div className='column-4 partenaire'>
                            <img src='/img/partenaires/lOreal.png'/>
                        </div>
                        <div className='column-4 partenaire'>
                            <img src='/img/partenaires/daher.png'/>
                        </div>
                        
                    </div>
            </section>
            <Footer />
        </div>
    )
}

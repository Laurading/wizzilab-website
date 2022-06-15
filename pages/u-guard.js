import Header from '../components/Header'


export default function Uguard() {
    return (
        <div>
            <Header />
            <section className='section-one anim'>

            </section>
            <section className='margin'>
                <h3>Un système en temps réel et autonome</h3>
                <p>5 capteurs (4 U-Guard-P et 1 U-Guard-M) génèrent un périmètre de sécurité autour de l’engin afin de détecter la proximité des piétons ou d’autres engins (via un badge ou un système identique).</p>
                <p>Il existe 
                    <span> 2 zones de sécurité </span>
                controlées par le U-Guard-M :</p>
                <ul>
                    <li>
                        La
                            <span className='yellow'> zone de prévention </span>
                        qui informe le conducteur de la présence d’autrui dans son espace de travail non visible.
                    </li>
                    <li>
                        La
                            <span className='red'> zone de danger </span>
                        qui alerte les deux protagonistes d'un danger de collision immédiat.
                    </li>
                </ul>
                <img className='solutions-img' src='/img/solutions/u-guard.png' />
            </section>
       
            <section className='lavender-bg'>
                <div className='margin'>
                    <h3>Vos avantages</h3>
                    <div className='content-col'>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/1.svg'/>
                            <p>Identifier et réduire les situations à risque sur votre site</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/2.svg'/>
                            <p>Installer facilement et rapidement notre kit</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/3.svg'/>
                            <p>Alerter le conducteur sur la proximité d’un engin ou d’un pieton</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/4.svg'/>
                            <p>Améliorer les différents comportements de déplacement</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/5.svg'/>
                            <p>Avertir les pietons lorsqu’ils entrent dans une zone potentiellement risquée</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/6.svg'/>
                            <p>Adapter les paramètres de détection à votre parc d’engins et votre environnement</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='margin'>
                <h3>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/u-guard/1.png'/>
                        <h5 className='red'>U-Guard-M</h5>
                        <ul>
                        <li>Synchronise les périphériques pour déterminer le périmètre de sécurité</li>
                        <li>Récupère les informations de distance reçus par les capteurs périphériques</li>
                        <li>Prend la décision d’informer ou d’alerter</li>
                        <li>Active les alerteurs</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/u-guard/2.png'/>
                        <h5 className='blue'>U-Guard-P</h5>
                        <ul>
                            <li>Mesure la distance avec les autres périphériques captés dans sa zone (engins et/ou piétons)</li>
                            <li>Communique les données de proximité au master</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/u-guard/3.png'/>
                         <h5 className='green'>U-Spot</h5>
                         <ul>
                             <li>Activé par la proximité d’un engin</li>
                             <li>Mesure une distance complémentaire en cas de non visibilité</li>
                             <li>Communique les données de proximité au master</li>
                         </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/u-guard/4.png'/>
                        <h5 className='yellow'>U-Space</h5>
                        <ul>
                            <li>Répond aux demandes de mesures des capteurs périphériques</li>
                            <li>Prévient le piéton en cas de danger</li>
                            <li>Composant “passif”</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='section-one anim'>
           
            </section>
        </div>
    )
}

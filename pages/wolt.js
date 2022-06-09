import Header from '../components/Header'


export default function Wolt() {
    return (
        <div>
            <Header />
            <section className='section-one anim'>

            </section>
            <section className='margin'>
            <h3>Un systeme de detection et d'alerte</h3>
            <p>
                WOLT se compose de tags, d’ancres et de gateways. Le tag (capteur) se localise par rapport aux ancres à une fréquence prédéfinie en fonction du cas d’usage. La donnée est envoyée dans le cloud à travers la gateway.
            </p>
            <p>
                <span>3 niveaux de précisions de localisation </span>
                sont possibles :
            </p>
            <ul>
                <li>Le <span className='red'>positionnement</span>, le plus précis des 3 niveaux, qui permet d’identifier la position exacte de l’objet</li>
                <li>La <span className='orange'>proximité</span> qui permet de connaître la position approximative d’un tag par rapport aux ancres</li>
                <li>La <span className='yellow'>présence</span> qui permet de savoir si un objet dans une zone d’intérêt</li>
            </ul>
                <img className='solutions-img' src='/img/solutions/wolt.png' />
            </section>
       
            <section className='lavender-bg'>
                <div className='margin'>
                <h3>Vos avantages</h3>
                <div className='content-col'>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/1.svg'/>
                        <p>Localiser les objets / inventaires et diminuer les pertes</p>
                    </div>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/2.svg'/>
                        <p>Installer facilement et rapidement notre kit</p>
                    </div>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/3.svg'/>
                        <p>Identifier les points de congestion et réduire et temps mort</p>
                    </div>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/4.svg'/>
                        <p>Adapter les besoins de localisation aux différents cas d’usage</p>
                    </div>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/5.svg'/>
                        <p>Optimiser les déplacements de vos objets / itinéraires</p>
                    </div>
                    <div className='column-3'>
                        <img className='picto' src='/img/pictos/wolt/6.svg'/>
                        <p>Améliorer la performance de votre activité</p>
                    </div>
                </div>
                </div>
            </section>
            <section className='margin'>
                <h3>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/wolt/1.png'/>
                        <h5 className='red'>Ancre</h5>
                        <ul>
                        <li>Les tags mesurent leur distance avec lui</li>
                        <li>Sert de repère fix</li>
                        <li>Composant “passif”</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wolt/2.png'/>
                        <h5 className='blue'>Tags</h5>
                        <ul>
                            <li>Objet mobile dont on veut connaître la position</li>
                            <li>Mesure sa distance avec les ancres et envoie l’information à la gateway</li>
                            <li>Deux types de tags qui permettent deux précisions : la position et la présence</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wolt/3.png'/>
                         <h5 className='green'>Gateway</h5>
                         <ul>
                             <li>Passerelle</li>
                             <li>Récolte les informations des tags et des ancres</li>
                             <li>Envoie les informations au cloud</li>
                         </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wolt/4.png'/>
                        <h5 className='yellow'>Cloud</h5>
                        <ul>
                            <li>Définit la position du tag en fonction des informations reçues par celui-ci</li>
                            <li>Permet de configurer les tags et les ancres</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='section-one anim'>
           
        </section>
        </div>
    )
}

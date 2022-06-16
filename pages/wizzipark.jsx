import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wizzipark() {
    return (
        <div>
            <Header />
            <section className='section-one anim'>

            </section>
            <section className='margin'>
            <h3>Un système en temps réel et autonome</h3>
            <p>
            Des capteurs de stationnement sans fils et autonomes détectent instantanément l&apos;arrivée ou le départ de véhicules et relaient l&apos;information vers le Wizzicloud au travers de la gateway. Les visiteurs ont accès en temps réel aux places disponibles qui peuvent être communiquées sur des afficheurs dynamiques.
            </p>
            <p>
                <span>2 types de capteurs </span>
                sont disponibles :
            </p>
            <ul>
            <li>
            Le <span>capteur magnétique</span>, se fixant au sol, détectant la présence d&apos;un véhicule.
            </li>
            <li>
                Le <span>capteur infrarouge à LED</span>, se fixant au plafond, change de couleur en fonction du statut de la place et au cas d&apos;usage.
            </li>
            </ul>
                <img className='solutions-img' src='/img/solutions/wizzipark.png' />
            </section>
       
            <section className='lavender-bg'>
                <div className='margin'>
                <h3>Vos avantages</h3>
                <div className='content-col'>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/1.svg'/>
                        <p>Améliorer le processus d&apos;accueil et la satisfaction des conducteurs</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/2.svg'/>
                        <p>Identifier les voitures ventouses</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/3.svg'/>
                        <p>Optimiser le taux de remplissage de votre parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/4.svg'/>
                        <p>Exploiter un système de réservation de places de parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/5.svg'/>
                        <p>Informer les visiteurs sur les emplacements spécifiques du parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/6.svg'/>
                        <p>Réduire le temps de recherche d&apos;une place de stationnement</p>
                    </div>
                </div>
                </div>
            </section>
            <section className='margin'>
                <h3>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/wizzipark/1.png'/>
                        <h5 className='red'>Capteur magnétique</h5>
                        <ul>
                        <li>Identifie la présence d&apos;un véhicule</li>
                        <li>Envoie l&apos;information de présence à la gateway</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/2.png'/>
                        <h5 className='blue'>Capteur infrarouge à LED</h5>
                        <ul>
                            <li>Identifie la présence d’un véhicule</li>
                            <li>Communique le statut de la place via le LED RGB</li>
                            <li>Envoie l&apos;information de présence à la gateway</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/3.png'/>
                         <h5 className='green'>Gateway</h5>
                         <ul>
                             <li>Passerelle</li>
                             <li>Récolte les informations des capteurs</li>
                             <li>Envoie les informations au cloud</li>
                         </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/4.png'/>
                        <h5 className='yellow'>Cloud</h5>
                        <ul>
                            <li>Récupère les informations par la gateway</li>
                            <li>Affiche les informations sur les places</li>
                            <li>Permet de configurer les capteurs et la gateway</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

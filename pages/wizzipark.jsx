import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wizzipark() {
    return (
        <div>
            <Header />
            <section className='section-one'>
            <div className='margin-lr'>
            <div className='padding-tb'>
            <h2 className='test-weight'><span className='red'>WIZZIPARK</span></h2>
            <h2>La solution de stationnement intelligent en temps réel sans fil</h2>
            <img className='solutions-img' src='/img/solutions/wizzipark.png' />
            </div>
            <p>
            Des capteurs de stationnement sans fils et autonomes détectent instantanément l&apos;arrivée ou le départ de véhicules et relaient l&apos;information vers le Wizzicloud au travers de la gateway. Les visiteurs ont accès en temps réel aux places disponibles qui peuvent être communiquées sur des afficheurs dynamiques.
            </p>
            <p>
                <span>2 types de capteurs </span>
                sont disponibles :
            </p>
            <ul>
            <li>
            Le <span>capteur au sol</span>, détectant la présence d&apos;un véhicule.
            </li>
            <li>
                Le <span>capteur plafonnier</span>, sa LED change de couleur en fonction du statut de la place et du cas d&apos;usage.
            </li>
            </ul>
                
            </div>
            </section>
       
            <section className='lavender-bg'>
                <div className='margin'>
                <h3  className='padding-tb'>Vos avantages</h3>
                <div className='content-col'>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/1.svg'/>
                        <p className='center'>Améliorer le processus d&apos;accueil et la satisfaction des conducteurs</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/2.svg'/>
                        <p className='center'>Identifier les voitures ventouses</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/3.svg'/>
                        <p className='center'>Optimiser le taux de remplissage de votre parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/4.svg'/>
                        <p className='center'>Exploiter un système de réservation de places de parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/5.svg'/>
                        <p className='center'>Informer les visiteurs sur les emplacements spécifiques du parking</p>
                    </div>
                    <div className='column-3 six'>
                        <img className='picto' src='/img/pictos/wizzipark/6.svg'/>
                        <p className='center'>Réduire le temps de recherche d&apos;une place de stationnement</p>
                    </div>
                </div>
                </div>
            </section>
            <section className='margin'>
                <h3 className='padding-tb'>Nos composants</h3>

                <div className='content-col'>
                    <div className='column-4'>
                        <img src='/img/composants/wizzipark/1.png'/>
                        <h5 className='blue'>WP100 : Capteur au sol</h5>
                        <ul>
                        <li>Identifie la présence d&apos;un véhicule</li>
                        <li>Envoie l&apos;information de présence à la gateway</li>
                        <li>Deux options d&apos;installation : à<span className='cultured'>-</span>coller ou à<span className='cultured'>-</span>encastrer</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/2.png'/>
                        <h5 className='red'>WP200 : Capteur plafonnier</h5>
                        <ul>
                            <li>Identifie la présence d’un véhicule</li>
                            <li>Affiche le statut de la place par retour lumineux</li>
                            <li>Envoie l&apos;information de présence à la gateway</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/3.png'/>
                         <h5 className='green'>WGATE-PRO : Gateway</h5>
                         <ul>
                             <li>Passerelle IoT</li>
                             <li>Récolte les informations des capteurs</li>
                             <li>Envoie les informations au cloud</li>
                             <li>Permet les interventions à distance</li>
                             <li>Deux options de connexion : mobile ou Ethernet</li>
                         </ul>
                    </div>
                    <div className='column-4'>
                    <img src='/img/composants/wizzipark/4.png'/>
                        <h5 className='yellow'>Wizzipark : Cloud</h5>
                        <ul>
                            <li>Récupère les informations transitant la / les gateway(s)</li>
                            <li>Affiche les informations sur les places</li>
                            <li>Permet de configurer les capteurs et la gateway</li>
                            <li>Fournit des statistiques d&apos;activité (nombre de visiteurs, taux d&apos;occupation,...)</li>
                            <li>L&apos;ensemble de vos parkings en supervision sur une seule interface</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='margin'>
                    <h3 className='padding-tb'>Ils nous font confiance</h3>
                    <div className='content-col'>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/postLuxembourg.png'/>
                        </div>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/laPoste.png'/>
                        </div>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/leclerc.png'/>
                        </div>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/superU.png'/>
                        </div>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/interSport.png'/>
                        </div>
                        <div className='column-6 partenaire'>
                            <img src='/img/partenaires/decathlon.png'/>
                        </div>
                        
                    </div>
            </section>
            <Footer/>
        </div>
    )
}

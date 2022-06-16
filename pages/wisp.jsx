import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wisp() {
    return (
        <div>
            <Header />
            <section className='section-one anim'>

            </section>
            <section className='margin'>
            <h3>Un système en temps réel et autonome</h3>
            <p>
            Des capteurs de stationnement sans fils et autonomes détectent instantanément l’arrivée ou le départ de véhicules et relaient l’information vers le Wizzicloud au travers de la gateway. Les visiteurs ont accès en temps réel aux places disponibles qui peuvent être communiquées sur des afficheurs dynamiques.
            </p>
            <p>
                <span>2 types de capteurs </span>
                sont disponibles :
            </p>
            <ul>
            <li>
            Le <span>capteur magnétique</span>, se fixant au sol, détectant la présence d'un véhicule.
            </li>
            <li>
                Le <span>capteur infrarouge à LED</span>, se fixant au plafond, change de couleur en fonction du statut de la place et au cas d'usage.
            </li>
            </ul>
                <img className='solutions-img' src='/img/solutions/wisp.png' />
            </section>
            <Footer/>
        </div>
    )
}

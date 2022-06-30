import Header from '../components/Header'
import Footer from '../components/Footer'
import Conception from '../components/Conception'


export default function SavoirFaire() {
    return (
        <div>
            <Header />
            <section className='section-one'>
            <div className='lavender-bg padding-tb'>
                    <h2 className='denim'>Notre savoir-faire</h2>
                    <h3 className='center'>Du bureau d&apos;étude à nos solutions sur &ldquo;étagère&rdquo;</h3>
                </div>
            </section>
            <section className='margin'>
                <div className='content-col'>
                    <div className='column-2'>
                        <h3 className='padding-tb'>L&apos;IoT vous accompagne dans votre transformation</h3>
                        <p>
                            L&apos;équipe Wizzilab déploie les capacités extraordinaires de l&apos;IoT en maîtrisant des technologies et des systèmes de conception uniques qui permettent de fournir la Data nécessaire pour vous accompagner:
                        </p>
                        <ul>
                            <li>
                                à maitriser vos recherches d&apos;économie d&apos;énergie
                            </li>
                            <li>
                                à améliorer les conditions de travail de vos salariés
                            </li>
                            <li>
                                dans votre transformation digitale
                            </li>
                            <li>
                                dans votre transition écologique
                            </li>
                        </ul>
                        <p>
                            Wizzilab répond aux besoins et demandes spécifique de ses clients à l’aide des nouvelles générations de composants éléctroniques et les technologies innovantes permettant d&apos;optimiser la performance de votre activité.
                        </p>
                    </div>
                    <div className='column-2'>
                        <img className='padding-iot' src='/img/IoT.png' />
                    </div>
                </div>
                <br />
                <div>
                    <p>Wizzilab sait répondre aux cas d’usages en utilisant la meilleure technologie adaptée en fonction des besoins tels que : la consommation d&apos;énergie, le débit, le milieu évoluant, dans le but d&apos;offrir la meilleure solution.</p>
                    <p>Comprendre les défis quotidiens dans les secteurs professionnels, publics ou privés, nous permet d&apos;optimiser les processus, de réduire les risques et d&apos;économiser les ressources.</p>
                </div>
            </section>

            <section className='lavender-bg'>
                <div className='margin'>
                    <h3  className='padding-tb'>Un système IoT efficace</h3>
                    <p>Après plus de 10 ans d&apos;expérience dans la conception, le déploiement et le service IoT, nous avons su identifier les caractéristiques d&apos;un système IoT efficace :</p>
                    <br/>
                    <div className='content-col'>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/1.svg' />
                            <p className='center'>Une solution technique qui a fait ses preuves</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/2.svg' />
                            <p className='center'>Installation facile et rapide</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/3.svg' />
                            <p className='center'>Minimisant les interventions physiques</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/4.svg' />
                            <p className='center'>Facile à entretenir, configurer et mettre à jour à distance</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/5.svg' />
                            <p className='center'>Sécurisé de bout en bout</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/savoirfaire/6.svg' />
                            <p className='center'>Adaptable via le Cloud en fonction des évolutions des cas d&apos;usages</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='margin'>
                <h3 className='padding-tb'>
                    Notre expertise technique
                </h3>
                <p>Sur le plan technologique, Wizzilab répond aux demandes de cas d&apos;usages spécifiques grâce à son équipe experte dans les systèmes embarqués basse consommation, technologies IoT sans fil, la sécurité et les services cloud.</p>
                <p>
                    Notre expertise technique comprend :
                </p>
                <ul>
                    <li>
                        La conception de la carte avec contraintes RF
                    </li>
                    <li>
                        La création de firmware embarqué à puissance limitée
                    </li>
                    <li>
                        La gestion de technologies IoT sans fil
                    </li>
                    <li>
                        Le traitement efficace des données et algorithmes
                    </li>
                    <li>
                        La séléction de réseaux et services cloud adaptés
                    </li>
                    <li>
                        La certification et industrialisation
                    </li>
                    <li>
                        La gestion de la production à grande échelle
                    </li>
                </ul>
            </section>
            <Conception/>
            {/* <section className='lavender-bg'>
                <div className='margin-lr padding-bottom'>
                <h3 className='padding-tb'>Une philosophie de conception</h3>
                <p>Chez Wizzilab, nous mettons en pratique une philosophie de conception stricte :</p>
                <br />
                <div className='content-col'>
                    <div className='column-3 no-gap six align-left denim-bg'>
                        <div className='content-padding'>
                            <h5 className='cultured'>Développement de systèmes de bout en bout.</h5>
                            <p className='cultured'>
                                Afin de développer le système le plus adapté à vos besoins, nous tenons
                                compte de vos attentes et votre environnement afin d&apos;allier le meilleur
                                rapport débit et puissance énergétique et mettre en place l&apos;architecture
                                la plus efficace depuis sa conception jusqu&apos;à son déploiement.
                            </p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left lavender-bg'>
                        <div className='content-padding'>
                            <h5>Communication sans fil optimale.</h5>
                            <p>Nous avons la possibilité de combiner différentes technologies sans fil
                                comme le DASH7, LoRaWAN et cellulaire entre autres, afin d&apos;optimiser
                                les compromis entre le débit de données, la portée et la consommation
                                d&apos;énergie. Le succès de tout système IoT est de pouvoir répondre à ses
                                différents paramètres en trouvant la meilleure combinaison pour votre
                                cas d&apos;usage spécifique.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left white-bg'>
                        <div className='content-padding'>
                            <h5>Localisation.</h5>
                            <p>Le positionnement indoor/outdoor est au cœur de nombreuses
                                applications professionnelles et privées. Nous avons développé une
                                solide expertise en UWB sans fil, ce qui nous permet d&apos;estimer des
                                distances avec une précision inférieure au METRE.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left white-bg'>
                        <div className='content-padding'>
                            <h5>Décisions évenementielles en cascade.</h5>
                            <p>La consommation d&apos;énergie de nos capteurs est dirigée et une
                                fréquence d&apos;éveil appliquée afin de préserver et d&apos;optimiser leur durée
                                d&apos;utilisation. Nous allions une consommation faible à la meilleure valeur
                                fonctionnelle de nos produits pour un rendement optimisé.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left denim-bg'>
                        <div className='content-padding'>
                            <h5 className='cultured'>Edge computing et algorithmes embarqués.</h5>
                                <p className='cultured'>Les informations sont traitées et filtrées
                                    dans les nœuds périphériques, chaque fois que nécessaire, avec la possibilité de
                                    rediriger et d&apos;agréger les flux de données. Cela permet d&apos;optimiser le traitement à
                                    chaque   étape,   d&apos;éviter   les   surcharges   et   de   fournir   uniquement   des   données
                                    significatives au service applicatif.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left lavender-bg'>
                        <div className='content-padding'>
                            <h5>Gestion centralisée de la flotte.</h5>
                            <p>La supervision à distance est un service indispensable pour la gestion
                                d&apos;un système IoT. Toutes nos solutions sont conçues afin qu&apos;elles soient
                                accessibles tout au long de leur vie pour la maintenance, la
                                reconfiguration, la sécurité et la mise à jour du firmware. </p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                </div>
            </section> */}
            <Footer />
        </div>
    )
}

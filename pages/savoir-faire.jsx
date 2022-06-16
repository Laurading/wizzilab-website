import Header from '../components/Header'
import Footer from '../components/Footer'


export default function SavoirFaire() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='lavender-bg'>
                    <h2>Notre savoir faire</h2>
                </div>
            </section>
            <section className='margin'>
                <div className='content-col'>
                    <div className='column-2'>
                        <h3> Qu'est ce qu'un projet IoT?</h3>
                        <p>
                            L’équipe Wizzilab déploie les capacités extraordinaires de l’IoT en maîtrisant des technologies et des systèmes de conception uniques qui permettent de fournir la Data nécessaire pour vous aider et accompagner  :
                        </p>
                        <ul>
                            <li>
                                à maitriser vos recherches d'économie d'énergie
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
                            Wizzilab répond aux besoins et demandes spécifique de ses clients à l’aide des nouvelles générations de composants éléctroniques et les technologies innovantes permettant d’optimiser la performance de votre activité.
                        </p>
                    </div>
                    <div className='column-2'>
                        <img className='padding-iot' src='/img/IoT.png' />
                    </div>
                </div>
                <br />
                <div>
                    <p>Wizzilab sait répondre aux cas d’usages en utilisant la meilleure technologie adaptée en fonction des besoins tels que : la consommation d’énergie, le débit, le milieu évoluant, dans le but d’offrir la meilleure solution.</p>
                    <p>Comprendre les défis quotidiens dans les secteurs professionnels, publics ou privés, nous permet d’optimiser les processus, de réduire les risques et d’économiser les ressources.</p>
                </div>
            </section>

            <section className='lavender-bg'>
                <div className='margin'>
                    <h3>Un système IoT efficace</h3>
                    <div className='content-col'>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/1.svg' />
                            <p>Identifier et réduire les situations à risque sur votre site</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/2.svg' />
                            <p>Installer facilement et rapidement notre kit</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/3.svg' />
                            <p>Alerter le conducteur sur la proximité d’un engin ou d’un pieton</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/4.svg' />
                            <p>Améliorer les différents comportements de déplacement</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/5.svg' />
                            <p>Avertir les pietons lorsqu’ils entrent dans une zone potentiellement risquée</p>
                        </div>
                        <div className='column-3 six'>
                            <img className='picto' src='/img/pictos/u-guard/6.svg' />
                            <p>Adapter les paramètres de détection à votre parc d’engins et votre environnement</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='margin'>
                <h3>
                    Notre expertise technique
                </h3>
                <p>Sur le plan technologique, Wizzilab répond aux demandes de cas d’usages spécifiques grâce à son équipe experte dans les systèmes embarqués basse consommation, technologies IoT sans fil, sécurité et service cloud.</p>
                <p>
                    Notre expertise technique comprend :
                </p>
                <ul>
                    <li>
                        La conception de la carte avec des contraintes RF
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
                        Le suivi de la production à grande échelle
                    </li>
                </ul>
            </section>
            <section className='margin'>
                <h3>Une philosophie de conception</h3>
                <p>Chez Wizzilab, nous mettons en pratique une philosophie de conception stricte :</p>
                <br />
                <div className='content-col'>
                    <div className='column-3 no-gap six align-left denim-bg cultured-border'>
                        <div className='content-padding'>
                            <h5 className='cultured'>Développement de systèmes de bout en bout.</h5>
                            <p className='cultured'>
                                Nous avons toujours à l’esprit l’ensemble des besoins, le coût et les défis de faible puissance par rapport au système, donc chaque composant est adapté pour fonctionner efficacement avec le reste du système.
                            </p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left lavender-bg cultured-border'>
                        <div className='content-padding'>
                            <h5>Communication sans fil optimale.</h5>
                            <p>Nous croyons que la disponibilité du réseau les infrastructures répondant aux exigences à grande échelle et à faible coût de l’IoT est une condition préalable au succès de tout système IoT. Nous avons la possibilité de combiner différentes technologies sans fil comme le DASH7, LoRaWAN et cellulaire entre autres, afin d’optimiser les compromis entre le débit de données, la portée et la consommation d’énergie.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left denim-border'>
                        <div className='content-padding'>
                            <h5>Localisation.</h5>
                            <p>Le positionnement intérieur et extérieur est au coeur d’une multitude des applications professionnelles et privées.
                                Nous avons développé une solide expertise en UWB sans fil, ce qui nous permet d’estimer les distances avec un sous-compteur précision.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left denim-border'>
                        <div className='content-padding'>
                            <h5>Décisions évenementielles en cascade.</h5>
                            <p>Nous utilisons des déclencheurs de faible puissance pour nous réveiller davantage modes de consommation d’énergie.
                                Cela permet de conserver la consommation extrêmement faible, tout en offrant la meilleure valeur fonctionnelle.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left denim-bg cultured-border'>
                        <div className='content-padding'>
                            <h5 className='cultured'>Edge computing et algorithmes embarqués.</h5>
                            <p className='cultured'>Les informations sont traitées et filtrées dans les noeuds périphériques, chaque fois que nécessaire, avec la possibilité de rediriger et les fulx de données agrégés. Cela permet d’optimiser le traiteuement à chaque étape, évite les débordements et ne fournit que des données significatives au service d’application.</p>
                        </div>
                    </div>
                    <div className='column-3 no-gap six align-left lavender-bg cultured-border'>
                        <div className='content-padding'>
                            <h5>Gestion centralisée de la flotte.</h5>
                            <p>Un système IoT efficace nécessite un moyen simple de servir et de configurer le parc de noeuds d’extrémité IoT. Nous concevons nos systèmes pour garantir qu’ils peuvent être accessibles tout au long de leur vie pour la maintenance, la reconfiguation, la sécurité et la mise à jour du firmware.</p>
                        </div>
                    </div>
                    <div>
                        <br/>
                    <p>
                        Basé sur le cloud fournissant des services de données IoT évolutifs. Chez Wizzilab, nous fournissons des données IoT en temps réel pour améliorer les performances. Nous fournissons des API cloud simples pour se connecter les données sont acheminées vers les services applicatifs du client.
                    </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

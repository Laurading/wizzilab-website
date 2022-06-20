import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wizziteam() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='lavender-bg'>
                    <h2>Wizziteam</h2> 
                </div>
            </section>
            <section className='margin'>
                
                        <h3>Notre vision</h3>
                        <p>Améliorer votre environnement en digitalisant la donnée physique</p>
                        <h3>Nos valeurs</h3>
                        <div className='content-col'>
                            <div className='column-3'>
                            <h4>Créativité</h4>
                            <img src='/img/valeurs/Creativite.png'/>
                            <p className='margin-top'> Allier le potentiel de la Technologie à l&apos;inventivité de notre équipe pour répondre aux challenges de nos utilisateurs</p>
                            </div>
                            <div className='column-3'>
                            <h4>Écoute</h4>
                            <img src='/img/valeurs/Ecoute.png'/>
                            <p className='margin-top'>Savoir nous adapter à vos contraintes afin d&apos;apporter une solution appropriée</p>
                            </div>
                            <div className='column-3'>
                                <h4>Engagement</h4>
                                <img src='/img/valeurs/Engagement.png'/>
                            <p className='margin-top'> Accompagner et soutenir nos partenaires dans leur projet en leur apportant le meilleur service</p>
                            </div>
                        </div>
            </section>
            <section className='margin'>
                <h3>Notre team</h3>
                <div className='content-col'>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Michael ANDRE</span></p>
                    <p className='center'>CEO</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Yordan TABAKOV</span></p>
                    <p className='center'>CTO</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Laurent BASTIDE</span></p>
                    <p className='center'>Product Architect</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Benjamin BABUT</span></p>
                    <p className='center'>Cloud System Architect</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Pierre-Emmanuel CHARBONNIER</span></p>
                    <p className='center'>.</p>
                    </div>
                    <div className='column-3'>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

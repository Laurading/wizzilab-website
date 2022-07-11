import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wizziteam() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='lavender-bg padding-tb'>
                        <div className='margin-lr'>
                        <h2 className='denim'>WizziTeam</h2>
                        <br/>
                    <h3>Notre vision : Les données des capteurs seront au coeur de la transformation numérique</h3>
                    <h5><span>“Si vous ne pouvez pas le mesurer, vous ne pouvez pas l’améliorer” - Peter Drucker</span></h5>
                        </div>
                </div>
            </section>
            <section className='margin'>
                
                        
                        <h3 className='padding-tb'>Nos valeurs</h3>
                        <div className='content-col'>
                            <div className='column-3'>
                            <h4 className='denim-bg cultured'><span>CRÉATIVITÉ</span></h4>
                            <img src='/img/valeurs/Creativite.png'/>
                            <p className='margin-top'> Allier le potentiel de la Technologie à l&apos;inventivité de notre équipe pour répondre à vos challenges</p>
                            </div>
                            <div className='column-3'>
                            <h4 className='denim-bg cultured'><span>ÉCOUTE</span></h4>
                            <img src='/img/valeurs/Ecoute.png'/>
                            <p className='margin-top'>Savoir nous adapter à vos contraintes afin d&apos;apporter une solution appropriée</p>
                            </div>
                            <div className='column-3'>
                                <h4 className='denim-bg cultured'><span>ENGAGEMENT</span></h4>
                                <img src='/img/valeurs/Engagement.png'/>
                            <p className='margin-top'>Vous accompagner et vous soutenir dans vos projets en apportant le meilleur service</p>
                            </div>
                        </div>
            </section>
            <section className='margin'>
                <h3 className='padding-tb'>Managing Team</h3>
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
                    <img src='/img/wizziteam/pe-blue.png'/>
                    <p className='center'><span>Pierre-Emmanuel CHARBONNIER</span></p>
                    <p className='center'>Sales Director</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Benjamin BABUT</span></p>
                    <p className='center'>Cloud System Architect</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Laurent BASTIDE</span></p>
                    <p className='center'>Product Architect</p>
                    </div>
                    <div className='column-3'>
                    <img src='/img/wizziteam/test.png'/>
                    <p className='center'><span>Jérémie GREFFE</span></p>
                    <p className='center'>Embedded Firmware Architect</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

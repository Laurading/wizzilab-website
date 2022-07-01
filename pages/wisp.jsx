import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wisp() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='margin-lr'>
                    <div className='padding-tb'>
                    <h2 className='test-weight'><span className='green'>WISP</span></h2>
                    <h2>La solution qui se connecte à votre environnement</h2>
                    </div>
                    <img className='solutions-img' src='/img/solutions/wisp.png' />
                    <div className='padding-tb'>
                    <p>
                        A l&apos;aide de capteurs d&apos;environnement, des données sont collectées puis transmises sous forme d&apos;indicateurs.</p>
                    <p>
                        WISP digitalise vos données telles que la température, la pression, l&apos;humidité, la luminosité, ...
                    </p>
                    <p>
                        Ses informations vous permettent d&apos;analyser les indicateurs choisis afin de compléter et améliorer votre processus de prise de décision.
                    </p>
                    <p>
                        Wizzilab peut s&apos;appuyer sur cette solution “sur étagère” pour répondre aux cas d&apos;usage spécifiques grâce à son expérience de bureau d’étude.
                    </p>

                    </div>
                </div>
            </section>
            <section className='margin'>
                    <h3 className='padding-tb'>Ils nous font confiance</h3>
                    <div className='content-col'>
                        <div className='column-2 partenaire'>
                            <img src='/img/partenaires/nasekomo.png'/>
                        </div>
                        <div className='column-2 partenaire'>
                            <img src='/img/partenaires/munichRe.png'/>
                        </div>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

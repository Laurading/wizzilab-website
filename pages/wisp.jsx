import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wisp() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='margin-lr margin-bottom'>
                    <h2><span className='green'>WISP : </span> La solution qui se connecte à votre environnement</h2>
                    <img className='solutions-img' src='/img/solutions/wisp.png' />
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
            </section>
            <Footer />
        </div>
    )
}

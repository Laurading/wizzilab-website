import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wisp() {
    return (
        <div>
            <Header />
            <section className='section-one anim'>
            <img src='/img/wisp.png' />
            </section>
            <section className='margin'>
            <h3>Un système flexible et pret à l&apos;emploi</h3>
            <p>
            A l&apos;aide de capteurs d&apos;environnement, des données sont collectées puis transmises sous forme d&apos;indicateurs.</p>
            <p>
            WISP digitalise vos données telles que la température, la pression, l&apos;humidité, la luminosité, ...
            </p>
            <p>
            ... vous permettant d&apos;analyser ces indicateurs afin de compléter et améliorer votre processus de prise de décision.
            </p>
            <p>
            Wizzilab peut s&apos;appuyer sur cette solution “sur étagère” pour répondre aux cas d&apos;usage spécifiques grâce à son expérience de bureau d’étude.
            </p>
                <img className='solutions-img' src='/img/solutions/wisp.png' />
            </section>
            <Footer/>
        </div>
    )
}

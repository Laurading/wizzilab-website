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
        </div>
      </section>
      <section className='margin'>
        <div className='content-col'>
          <div className='column-2'>
            <div className='padding-tb'>
              <h3>Depuis 10 ans, Wizzilab vous accompagne dans votre transformation</h3>
              <br/>
                  <h4>En libérant les capacités extraodinaires de l&apos;IoT</h4>
               
              <p>
                Les nouvelles technologies révolutionnent notre capacité à saisir la réalité de notre environnement. Grâce à ces avancées, nous sommes capables de répondre aux enjeux actuels : optimiser les processus de production, réduire les risques et économiser les ressources.</p>
           
                  <h4>En maîtrisant les technologies et la performance de vos installations</h4>
            
              <p>
                Nous apportons la solution optimale en adaptant la technologie aux besoins tels que : la consommation d&apos;énergie, le débit et les contraintes d&apos;environnement.
              </p>
            
                  <h4>En fournissant des données utiles</h4>
              
              <p>La donnée est la source clé pour réussir la transformation de votre activité. Sa pertinence est corrélée à son niveau de précision, de fiabilité et de protection. Elle doit être délivrée au bon moment afin d&apos;impacter le processus d&apos;analyse et de prise de décision.</p>
            </div>

          </div>
          <div className='column-2'>
            <img className='padding-iot' src='/img/IoT.png' />
          </div>
        </div>
      </section>
      <Conception />
      <section className='margin'>
        <div>
        <h3 className='padding-tb'>
          Notre expertise technique
        </h3>
        </div>
        <ul>
          <li>
            La conception de la carte avec contraintes RF
          </li>
          <li>
            Le développement du firmware embarqué ultra basse consommation
          </li>
          <li>
            La gestion des technologies IoT sans fil
          </li>
          <li>
            Le traitement efficace des données
          </li>
          <li>
            La séléction de réseaux et services cloud adaptés
          </li>
          <li>
            La certification et l&apos;industrialisation
          </li>
          <li>
            La gestion de la production à grande échelle
          </li>
        </ul>
      </section>
      
      <Footer />
    </div>
  )
}

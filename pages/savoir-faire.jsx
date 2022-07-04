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
          <br />
          <h3 className='center'>Du bureau d&apos;étude à nos solutions sur &ldquo;étagère&rdquo;</h3>
        </div>
      </section>
      <section className='margin'>
        <div className='content-col'>
          <div className='column-2'>
            <div className='padding-tb'>
              <h3>Wizzilab vous accompagne dans votre transformation</h3>
              <br/>
              <ul>
                <li>
                  <h4>En libérant les capacités extraodinaires de l&apos;IoT</h4>
                </li>
              </ul>
              <p>
                Les nouvelles générations de composants électroniques et les nouvelles technologies sans fil révolutionnent notre capacité à saisir la réalité de notre environnement. Grâce à ces avancées, nous sommes capables de répondre aux enjeux actuels : optimiser les processus de production, réduire les risques et économiser les ressources.</p>
              <ul>
                <li>
                  <h4>En maîtrisant les technologies et la performance de vos installations</h4>
                </li>
              </ul>
              <p>
                Nous apportons la solution spécifique aux cas d&apos;usages en adaptant la technologie aux besoins tels que : la consommation d&apos;énergie, le débit et les contraintes d&apos;environnement.
              </p>
              <ul>
                <li>
                  <h4>En fournissant des données utiles</h4>
                </li>
              </ul>
              <p>La donnée est la source clé pour réussir la transformation de son activité. Sa pertinence est corrélée à son niveau de précision, de fiabilité et de protection. Elle doit être délivrée au bon moment afin d&apos;impacter le processus d&apos;analyse et de prise de décision.</p>
            </div>

          </div>
          <div className='column-2'>
            <img className='padding-iot' src='/img/IoT.png' />
          </div>
        </div>
      </section>

      <section className='lavender-bg'>
        <div className='margin'>
          <h3 className='padding-tb'>Un système IoT efficace</h3>
          <p>Après plus de 10 ans d&apos;expérience dans la conception, le déploiement et le service IoT, nous avons su identifier les caractéristiques d&apos;un système IoT efficace :</p>
          <br />
          <div className='content-col'>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/1.svg' />
              <p className='center'>Une solution technique qui a fait ses preuves sur le terrain</p>
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
        <div>
        <h3 className='padding-tb'>
          Notre expertise technique
        </h3>
        <p>Une équipe experte dans les systèmes embarqués à faible consommation, les technologies sans fil IoT, la sécurité et les services cloud est à votre écoute</p>
        </div>
        <br/>
        <p className='underline'>
          Notre expertise technique comprend :
        </p>
        <br/>
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
      <Conception />
      <Footer />
    </div>
  )
}

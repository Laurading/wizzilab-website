import Header from '../components/Header';
import Secteurs from '../components/Secteurs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      
      <section className='section-one'>
        <div className='denim-bg'>
          <div className="margin-lr">
            <h2 className='center cultured padding-tb'>Fournisseur de Données d&apos;objets connectés</h2>
            <img className="landing-img" src="/img/landing.png" />
          </div>
        </div>
      </section>

      <section className='lavender-bg'>
        <div className='margin-lr padding-tb'>
          <h2 className='padding-tb'>La Donnée temps réel au service de la Performance</h2>
          <Secteurs />
        </div>
      </section>

      <section className='margin'>
        <h3 className='padding-tb'>Solutions autonomes, sans fil et basse consommation</h3>
        <div className='content-col'>
          <div className='column-3 '>
            <h4 className='denim-bg'><span className='cultured'>1. CIBLER</span></h4>
            <img src='/img/processus/cibler.png' />
            <br />
            <p className='center'><span>Comprendre et définir vos besoins</span></p>
          </div>
          <div className='column-3'>
            <h4 className='denim-bg'><span className='cultured'>2. DÉPLOYER</span></h4>
            <img src='/img/processus/deployer.png' />
            <br />
            <p className='center'><span>Installer simplement et rapidement</span></p>
          </div>
          <div className='column-3'>
            <h4 className='denim-bg'><span className='cultured'>3. RÉCOLTER</span></h4>
            <img src='/img/processus/recolter.png' />
            <br />
            <p className='center'><span>Superviser à distance
              et récolter vos données</span></p>
          </div>
        </div>
      </section>

      <section className='lavender-bg'>
        <div className='margin'>
          <h3 className='padding-tb'>Des systèmes IoT efficaces</h3>
          <div className='content-col'>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/1.svg' />
              <p className='center'>Prouvés sur le terrain</p>
            </div>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/2.svg' />
              <p className='center'>Rapides à installer</p>
            </div>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/3.svg' />
              <p className='center'>Faciles à entretenir, configurer et mettre à jour à distance</p>
            </div>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/4.svg' />
              <p className='center'>Scalables et évolutifs</p>
            </div>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/5.svg' />
              <p className='center'>Sécurisés de bout en bout</p>
            </div>
            <div className='column-3 six'>
              <img className='picto' src='/img/pictos/savoirfaire/6.svg' />
              <p className='center'>Supervisés via le Cloud</p>
            </div>
          </div>
        </div>
      </section>

      <section className='margin'>
        <h3 className='padding-tb'>Ils nous font confiance</h3>
        <div className='content-col'>
          <div className='column-4 partenaire'>
            <img src='/img/partenaires/zozio.png' />
          </div>
          <div className='column-4 partenaire'>
            <img src='/img/partenaires/phidata.png' />
          </div>
          <div className='column-4 partenaire'>
            <img src='/img/partenaires/postLuxembourg.png' />
          </div>
          <div className='column-4 partenaire'>
            <img src='/img/partenaires/macq.png' />
          </div>

        </div>
      </section>

      <section className='lavender-bg'>
        <div className='margin-lr'>
          <h3 className='padding-tb'>Depuis 2011</h3>
          <div className='content-col'>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/home/1.svg' />
              <p className='center'><span className='number'>+200 000</span> capteurs déployés</p>
            </div>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/home/2.svg' />
              <p className='center'><span className='number'>+1 milliard</span> de messages échangés sur le Dash7board</p>
            </div>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/home/3.svg' />
              <p className='center'><span className='number'>+38 000</span> mise à jour à distance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

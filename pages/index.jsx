import Header from '../components/Header'
import Secteurs from '../components/Secteurs'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Header />
      <section className='section-one anim'>
        <img src='/img/landing.png'/>
      </section>
      <Secteurs />
      <section className='margin'>
        <h3>Notre processus</h3>
        <div className='content-col'>
          <div className='column-3 '>
            <img src='/img/processus/cibler.png'/>
          </div>
          <div className='column-3'>
            <img src='/img/processus/deployer.png'/>
          </div>
          <div className='column-3'>
            <img src='/img/processus/recolter.png'/>
          </div>
        </div>

      </section>
      <section className='lavender-bg'>
        <div className='margin-prefooter'>
          <h3>Depuis 2011</h3>
          <div className='content-col'>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/u-guard/1.svg' />
              <p>Identifier et réduire les situations à risque sur votre site</p>
            </div>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/u-guard/2.svg' />
              <p>Installer facilement et rapidement notre kit</p>
            </div>
            <div className='column-3'>
              <img className='picto' src='/img/pictos/u-guard/3.svg' />
              <p>Alerter le conducteur sur la proximité d’un engin ou d’un pieton</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

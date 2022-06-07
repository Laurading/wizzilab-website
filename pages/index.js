import Header from '../components/Header'
import Secteurs from '../components/Secteurs'


export default function Home() {
  return (
    <div>
      <Header />
      <section className='section-one anim'>

      </section>
      <Secteurs />
      <section className='section-one anim'>

      </section>
      <section className='lavender-bg'>
        <div className='margin'>
          <h2>Depuis 2011</h2>
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
    </div>
  )
}

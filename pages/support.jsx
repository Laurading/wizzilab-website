import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wisp() {
  return (
    <div>
      <Header />
      <section className='section-one'>
        <div className='lavender-bg padding-tb'>
          <h2 className='denim'>Support</h2>
        </div>
      </section> 
      <section className='margin-lr'>
        <div className='padding-tb'>
          <h3>Dash7</h3>
          <br/>
          <p>Wizzilab est membre de l'alliance depuis 2011.</p>
          <p>Toutes les infos sur le protocole DASH7 sont librement accessible sur le <span className='underline'><a href='https://wizzilab.com/wiki/#!dash7/dash7.md'>site de l'alliance</a></span>.</p>
          {/* -> rediriger vers l'alliance : "Wizzilab est membre de la dash7 alliance + logo de l'alliance + le site de l'alliance : ici (https://www.dash7-alliance.org/)" */}
        </div>
      </section>
      <section className='lavender-bg'>
        <div className='margin-lr'>
          <div className='padding-tb'>
          <h3 className=''>Wizzilab solutions</h3>
          <br/>
          <p>Vous pouvez consulter les pages dédiées à nos différents produits sur notre wiki : </p>
          </div>
          <div className='content-col'>
            <div className='column-3'><h5>WOLT</h5></div>
            <div className='column-3'><h5>WIZZIPARK</h5></div>
            <div className='column-3'><h5>WISP</h5></div>
            <div className='column-3'><h5>WIZZICLOUD</h5></div>
            <div className='column-3'><h5>WIZZIGATE</h5></div>
            <div className='column-3'><h5>WIZZIKIT</h5></div>
          </div>
          <a href='https://wizzilab.com/wiki/#!wizzicloud/network.md'><h4></h4></a>
        </div>

      </section>
      <section className='margin'>
        <h3>Contact</h3>
        <br/>
        <p>Vous pouvez contacter notre support technique : <span>support@wizzilab.fr</span></p>
      </section>
      <Footer />
    </div>
  )
}

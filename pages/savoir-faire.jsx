import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Conception from '../components/Conception'
import * as locales from '../assets/locales';

export default function SavoirFaire() {

  const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])
    
  return (
    <>
    {data && (
      <div>
      <Header  data={data}/>
      <section className='section-one'>
        <div className='lavender-bg padding-tb'>
          <h2 className='denim'>{data.expertise.title}</h2>
        </div>
      </section>
      <section className='margin'>
        <div className='content-col'>
          <div className='column-2'>
            <div className='padding-tb'>
              <h3>{data.expertise.howtitle}</h3>
              <br/>
                  {data.expertise.actions.map(action => (
                    <div key={action.title}>
                      <h4>{action.title}</h4>
                      <p>{action.text}</p>
                    </div>
                  ))}
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
    )}
    </>
  )
}

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
  }, [locale])

  return (
    <>
      {data && (
        <div>
          <Header data={data} />
          <section className='section-one'>
            <div className='lavender-bg padding-tb'>
              <h2 className='denim'>{data.knowhow.title}</h2>
            </div>
          </section>
          <section className='margin'>
            <div className='content-col'>
              <div className='column-2'>
                <div className='padding-tb'>
                  <h3>{data.knowhow.howtitle}</h3>
                  <br />
                  {data.knowhow.actions.map(action => (
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
          <Conception data={data}/>
          <section className='margin-lr padding-tb'>
            <div>
              <h3 className='padding-bottom'>
                {data.knowhow.expertisetitle}
              </h3>
              <br />
              <br />
            </div>
            <div>
              <ul>
                {data.knowhow.descriptions.map(description => (
                  <li key={description.list}>{description.list}</li>
                ))}
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  )
}

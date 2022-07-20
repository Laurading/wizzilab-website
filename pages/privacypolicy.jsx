import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as locales from '../assets/locales';

export default function PrivacyPolicy() {

  const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  }, [locale])

  return (
    <>
      {
        data && (
          <div>
            <Header data={data} />
            <section className='section-one'>
              <div className='lavender-bg padding-tb'>
                <h2 className='denim'>{data.privacypolicy.title}</h2>
              </div>
            </section>
            <section className='margin'>
              <h4>{data.privacypolicy.wizzilab}</h4>
              <p>{data.privacypolicy.capital}</p>
              <p>{data.privacypolicy.rcs}</p>
              <p>{data.privacypolicy.headoffice}</p>
            </section>
            <section className='margin'>
              <h4>{data.privacypolicy.chargeof}</h4>
              <p>{data.privacypolicy.chargeofname}</p>
              <p>{data.privacypolicy.tel}</p>
              <p>{data.privacypolicy.email}</p>
            </section>
            <section className='margin'>
              <h4>{data.privacypolicy.hosting}</h4>
              <p>{data.privacypolicy.hostingtext}</p>
            </section>
            <section className='margin'>
              <h4>{data.privacypolicy.rgpd}</h4>
              <p>{data.privacypolicy.rgpdtext}</p>
            </section>
            <section className='margin'>
              <h4>{data.privacypolicy.copyright}</h4>
              <p>{data.privacypolicy.copyrighttext1}</p>
              <p>{data.privacypolicy.copyrighttext2}</p>
            </section>
            <Footer />
          </div>
        )
      }</>
  )
}

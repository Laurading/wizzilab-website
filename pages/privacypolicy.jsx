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
              <p>Wizzilab - Société par actions simplifiée (siret : )</p>
            </section>
            <Footer />
          </div>
        )
      }</>
  )
}

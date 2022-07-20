import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as locales from '../assets/locales';

export default function Wizziteam() {

  const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])

  return (
    <>
    {data && (<div>
      <Header data={data} />
      <section className='section-one'>
        <div className='lavender-bg padding-tb'>
          <div className='margin-lr'>
          <h2 className='denim'>WizziTeam</h2>
          </div>
        </div>
      </section>

      <section className='margin'>
        <h3 className='padding-tb'>{data.wizziteam.vision}</h3>
        <h4><span>{data.wizziteam.visiontext}</span></h4>
        <br/>
        <p>{data.wizziteam.quote}</p>
      </section>

      <section className='margin'>
        <h3 className='padding-tb'>{data.wizziteam.valuestitle}</h3>
        <div className='content-col'>
          
          {data.wizziteam.values.map(value => (
            <div className='column-3' key={value.name}>
            <h4 className='denim-bg cultured'><span>{value.name}</span></h4>
            <img src={value.img} />
            <p className='margin-top'>{value.text}</p>
          </div>
              ))}
        </div>
      </section>
      <section className='margin'>
        <h3 className='padding-tb'>Managing Team</h3>
        <div className='content-col'>
          <div className='column-3'>
            <img src='/img/wizziteam/test.png' />
            <p className='center'><span>Michael ANDRE</span></p>
            <p className='center'>CEO</p>
          </div>
          <div className='column-3'>
            <img src='/img/wizziteam/yordan-blue.png' />
            <p className='center'><span>Yordan TABAKOV</span></p>
            <p className='center'>CTO</p>
          </div>
          <div className='column-3'>
            <img src='/img/wizziteam/pe-blue.png' />
            <p className='center'><span>Pierre-Emmanuel CHARBONNIER</span></p>
            <p className='center'>Sales Director</p>
          </div>
          <div className='column-3'>
            <img src='/img/wizziteam/test.png' />
            <p className='center'><span>Benjamin BABUT</span></p>
            <p className='center'>Cloud System Architect</p>
          </div>
          <div className='column-3'>
            <img src='/img/wizziteam/test.png' />
            <p className='center'><span>Laurent BASTIDE</span></p>
            <p className='center'>Product Architect</p>
          </div>
          <div className='column-3'>
            <img src='/img/wizziteam/jeremie-blue.png' />
            <p className='center'><span>Jérémie GREFFE</span></p>
            <p className='center'>Embedded Firmware Architect</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    )}
    </>
  )
}

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header';
import Secteurs from '../components/Secteurs';
import Footer from '../components/Footer';
import LavenderPicto from '../components/LavenderPicto';
import * as locales from '../assets/locales';

export default function Home() {

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
            <div className='denim-bg'>
              <div className="margin-lr">
                <h2 className='center cultured padding-tb'>{data.landing.mission}</h2>
                <img className="landing-img" src="/img/landing.png" />
              </div>
            </div>
          </section>

          <section className='lavender-bg'>
            <div className='margin-lr padding-tb'>
              <h2 className='padding-tb'>{data.landing.promise}</h2>
              <Secteurs />
            </div>
          </section>

          <section className='margin'>
            <h3 className='padding-tb'>{data.landing.process}</h3>
            <div className='content-col'>
              <div className='column-3 '>
                <h4 className='denim-bg'><span className='cultured'>{data.landing.target}</span></h4>
                <img src={data.landing.targetimg} />
                <br />
                <p className='center'><span>{data.landing.targettext}</span></p>
              </div>
              <div className='column-3'>
                <h4 className='denim-bg'><span className='cultured'>{data.landing.deploy}</span></h4>
                <img src='/img/processus/deployer.png' />
                <br />
                <p className='center'><span>{data.landing.deploytext}</span></p>
              </div>
              <div className='column-3'>
                <h4 className='denim-bg'><span className='cultured'>{data.landing.collect}</span></h4>
                <img src='/img/processus/recolter.png' />
                <br />
                <p className='center'><span>{data.landing.collecttext}</span></p>
              </div>
            </div>
          </section>

          <LavenderPicto bubble="landing" />

          <section className='margin'>
            <h3 className='padding-tb'>{data.landing.partnertitle}</h3>
            <div className='content-col'>
              {data.landing.partners.map(partner => (
                <div key={partner.id} className='column-6 partenaire'>
                  <img src={partner.logo}/>
                </div>
              ))}
            </div>
          </section>

          <section className='lavender-bg'>
            <div className='margin-lr'>
              <h3 className='padding-tb'>{data.landing.xptitle}</h3>
              <div className='content-col'>
              {data.landing.xp.map(exp => (
                <div key={exp.text} className='column-3'>
                  <img className='picto' src={exp.img} />
                  <p className='center'><span className='number'>{exp.number}</span> {exp.text}</p>
                </div>
              ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  )
}

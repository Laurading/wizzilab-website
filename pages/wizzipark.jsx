import React, { useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import LavenderPicto from '../components/LavenderPicto'

export default function Wizzipark() {

  const { locale } = useRouter();
  const [data, setData] = useState();

  fetch(`/locales/${locale}.json`)
    .then(resp => resp.json())
    .then(res => setData(res))
  return (

    <>
      {data && (
        <div>
          <Header  data={data}/>
          <section className='section-one'>
            <div className='margin-lr'>
              <div className='padding-tb'>
                <h2 className='test-weight'><span className='red'>WIZZIPARK</span></h2>
                <h2>{data.wizzipark.title}</h2>
              </div>
              <img className='solutions-img' src={data.wizzipark.img} />
              <p>
                {data.wizzipark.text}
              </p>
              <p>
                <span>{data.wizzipark.bullettitlespan} </span>
                {data.wizzipark.bullettitle}
              </p>
              <ul>
                {data.wizzipark.bulletpoints.map(bulletpoint => (
                  <li key={bulletpoint.span}><span className={bulletpoint.color}>{bulletpoint.span}</span> {bulletpoint.text}</li>
                ))}
              </ul>
            </div>
          </section>
          <LavenderPicto bubble="wizzipark" />
          <section className='margin'>
            <h3 className='padding-tb'>{data.wizzipark.componentstitle}</h3>

            <div className='content-col'>
              {data.wizzipark.components.map(component => (
                <div key={component.name} className='column-4'>
                  <img src={component.img} />
                  <h5 className={component.color}>{component.name}</h5>
                  <ul>
                    {component.descriptions.map(description => (
                      <li key={description.list}>{description.list}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </section>
          <section className='margin'>
            <h3 className='padding-tb'>{data.wizzipark.partnertitle}</h3>
            <div className='content-col'>
              {data.wizzipark.partners.map(partner => (
                <div key={partner.id} className='column-6 partenaire'>
                  <img src={partner.logo} />
                </div>
              ))}
            </div>
          </section>
          <Footer />
        </div>
      )}</>
  )
}

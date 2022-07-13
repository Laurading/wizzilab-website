import React, { useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import LavenderPicto from '../components/LavenderPicto'


export default function Wolt() {

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
            <h2 className='test-weight'><span className='blue'>WOLT</span></h2>
            <h2>{data.wolt.title}</h2>
          </div>
          <img className='solutions-img' src={data.wolt.img} />
          <p>
            {data.wolt.text}
          </p>
          <p>
            <span>{data.wolt.bullettitlespan} </span>
            {data.wolt.bullettitle}
          </p>
          <ul>
            {data.wolt.bulletpoints.map(bulletpoint => (
                    <li key={bulletpoint.span}><span className={bulletpoint.color}>{bulletpoint.span}</span> {bulletpoint.text}</li>
            ))}
          </ul>
        </div>
      </section>
      <LavenderPicto bubble="wolt" />
      <section className='margin'>
        <h3 className='padding-tb'>{data.wolt.componentstitle}</h3>

        <div className='content-col'>
        {data.wolt.components.map(component => (
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
      <section className='lavender-bg'>
        <div className='margin-lr'>
          <div className='content-col'>
            <div className='column-2'>
              <h3 className='padding-tb'>{data.wolt.kittitle}</h3>
              <p>{data.wolt.kittext}</p>
              <ul>
                  {data.wolt.kitul.map(kitli => (
                    <li key={kitli.list}>{kitli.kitli}</li>
                  ))}
                  </ul>
              <div className='padding-tb'>
                <a className="buy-button" href='https://wizzilab.com/shop'>{data.wolt.buy}</a>
              </div>
            </div>
            <div className='column-2 padding-tb'>
              <img src={data.wolt.kitimg} />
            </div>
          </div>
        </div>
      </section>
      <section className='margin'>
            <h3 className='padding-tb'>{data.wolt.partnertitle}</h3>
            <div className='content-col'>
              {data.wolt.partners.map(partner => (
                <div key={partner.id} className='column-4 partenaire'>
                  <img src={partner.logo}/>
                </div>
              ))}
            </div>
          </section>
      <Footer />
    </div>
    )}</>
  )
}

import React, { useState } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Wisp() {

  const { locale } = useRouter();
  const [data, setData] = useState();

  fetch(`/locales/${locale}.json`)
    .then(resp => resp.json())
    .then(res => setData(res))
    
  return (
    <>
    {
      data && (
        <div>
      <Header  data={data}/>
      <section className='section-one'>
        <div className='lavender-bg padding-tb'>
          <h2 className='denim'>Support</h2>
        </div>
      </section> 
      <section className='margin-lr'>
        <div className='padding-tb'>
          <h3>Dash7</h3>
          <br/>
          <p>{data.support.dash7text}</p>
          <p>{data.support.dash7info} <span className='underline'><a href='https://www.dash7-alliance.org'>{data.support.dash7link}</a></span></p>
        </div>
      </section>
      <section className='lavender-bg'>
        <div className='margin-lr'>
          <div className='padding-tb'>
          <h3 className=''>Wizzilab solutions</h3>
          <br/>
          <p>{data.support.wikitext}</p>
          </div>
          <div className='content-col'>
            <div className='column-3'>
              <h5><a href='https://wizzilab.com/wiki/#!index.md'><span className='blue'>WOLT</span></a></h5>
              </div>
            <div className='column-3'>
              <h5><a href='https://wizzilab.com/wiki/#!index.md'><span className='red'>WIZZIPARK</span></a></h5>
              </div>
            <div className='column-3'>
              <h5><a href='https://wizzilab.com/wiki/#!index.md'><span className='green'>WISP</span></a></h5>
              </div>
            <div className='column-3'><h5><a href='https://wizzilab.com/wiki/#!index.md'><span>WIZZICLOUD</span></a></h5></div>
            <div className='column-3'><h5><a href='https://wizzilab.com/wiki/#!index.md'><span>WIZZIGATE</span></a></h5></div>
            <div className='column-3'><h5><a href='https://wizzilab.com/wiki/#!index.md'><span>WIZZIKIT</span></a></h5></div>
          </div>
          <a href='https://wizzilab.com/wiki/#!wizzicloud/network.md'><h4></h4></a>
        </div>

      </section>
      <section className='margin'>
        <h3>Contact</h3>
        <br/>
        <p>{data.support.contacttext} : <span>{data.support.contactspan}</span></p>
      </section>
      <Footer />
    </div>
      )
    }</>
  )
}

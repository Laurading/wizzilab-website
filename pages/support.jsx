import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as locales from '../assets/locales';

export default function SavoirFaire() {

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
                <h2 className='denim'>Support</h2>
              </div>
            </section>
            <section className='margin-lr'>
              <div className='padding-tb'>
                <h3 className=''>Wizzilab solutions</h3>
                <br />
                <p>{data.support.wikitext}</p>
              </div>
              <div className='content-col'>
                <div className='column-3'>
                <a href='https://wizzilab.com/wiki/#!hardware/wolt-d7a.md'>
                  <h5><span className='blue'>WOLT</span></h5>
                  <img src='/img/composants/wolt/support.png'/>
                </a>
                </div>
                <div className='column-3'>
                <a href='https://wizzilab.com/wiki/#!index.md'>
                  <h5><span className='red'>WIZZIPARK</span></h5>
                  <img src='/img/composants/wizzipark/support.png'/>
                </a>
                </div>
                <div className='column-3'>
                <a href='https://wizzilab.com/wiki/#!hardware/wisp.md'>
                  <h5><span className='green'>WISP</span></h5>
                  <img src='/img/composants/wisp/support.png'/>
                </a>
                </div>
                <div className='column-3'><a href='https://wizzilab.com/wiki/#!wizzicloud/network.md'><h5><span>WIZZICLOUD</span></h5>
                <img src='/img/composants/cloud.png'/>
                </a></div>
                <div className='column-3'><a href='https://wizzilab.com/wiki/#!hardware/wizzigate_wrt.md'><h5><span>WIZZIGATE</span></h5>
                <img src='/img/composants/gateway.png'/>
                </a></div>
                <div className='column-3'>
                <a href='https://wizzilab.com/wiki/#!wizzikit/wizzikit.md'><h5><span>WIZZIKIT</span></h5>
                <img src='/img/composants/kit.png'/>
                </a></div>
              </div>
              <a href='https://wizzilab.com/wiki/#!wizzicloud/network.md'><h4></h4></a>

            </section>
            <section className='lavender-bg'>
              <div className='margin-lr'>
                <div className='padding-tb'>
                  <h3>DASH7</h3>
                  <br />
                    <p>{data.support.dash7text}</p>
                  <p>{data.support.dash7info} <span className='underline'><a href='https://www.dash7-alliance.org'>{data.support.dash7link}</a></span></p>
                  <br/>
                    <div className='d7a'>
                      <img src='/img/d7aMember.png'/>
                    </div>
                </div>
              </div>

            </section>
            <section className='margin'>
              <h3>Contact</h3>
              <br />
              <p>{data.support.contacttext} : <span>{data.support.contactspan}</span></p>
            </section>
            <Footer />
          </div>
        )
      }</>
  )
}

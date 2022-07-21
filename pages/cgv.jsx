import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as locales from '../assets/locales';

export default function Cgv() {

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
                <h2 className='denim'>{data.cgv.title}</h2>
              </div>
            </section>
            <section className='margin'>
              <h4>{data.cgv.preambletitle}</h4>
              <p>{data.cgv.preambletext}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause1.title}</h4>
              <p>{data.cgv.clause1.ul}</p>
              <ul>
                <li><p>{data.cgv.clause1.li1}</p></li>
                <li><p>{data.cgv.clause1.li2}</p></li>
              </ul>
              <p>{data.cgv.clause1.para1}</p>
              <p>{data.cgv.clause1.para2}</p>
              <p>{data.cgv.clause1.para3}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause2.title}</h4>
              <p>{data.cgv.clause2.para1}</p>
              <p>{data.cgv.clause2.para2}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause3.title}</h4>
              <p>{data.cgv.clause3.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause4.title}</h4>
              <p>{data.cgv.clause4.para1}</p>
              <p>{data.cgv.clause4.para2}</p>
              <p>{data.cgv.clause4.para3}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause5.title}</h4>
              <p>{data.cgv.clause5.para1}</p>
              <p>{data.cgv.clause5.para2}</p>
              <p>{data.cgv.clause5.para3}</p>
              <p>{data.cgv.clause5.para4}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause6.title}</h4>
              <p>{data.cgv.clause6.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause7.title}</h4>
              <p>{data.cgv.clause7.para1}</p>
              <p>{data.cgv.clause7.para2}</p>
              <p>{data.cgv.clause7.para3}</p>
              <p>{data.cgv.clause7.para4}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause8.title}</h4>
              <p>{data.cgv.clause8.para1}</p>
              <p>{data.cgv.clause8.para2}</p>
              <p>{data.cgv.clause8.para3}</p>
              <p>{data.cgv.clause8.para4}</p>
              <p>{data.cgv.clause8.para5}</p>
              <p>{data.cgv.clause8.para6}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause9.title}</h4>
              <p>{data.cgv.clause9.subtitle1}</p>
              <p>{data.cgv.clause9.para1}</p>
              <p>{data.cgv.clause9.para2}</p>
              <p>{data.cgv.clause9.para3}</p>
              <p>{data.cgv.clause9.para4}</p>
              <p>{data.cgv.clause9.para5}</p>
              <p>{data.cgv.clause9.para6}</p>
              <p>{data.cgv.clause9.para7}</p>
              <p>{data.cgv.clause9.subtitle2}</p>
              <p>{data.cgv.clause9.para8}</p>
              <p>{data.cgv.clause9.para9}</p>
              <p>{data.cgv.clause9.para10}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause10.title}</h4>
              <p>{data.cgv.clause10.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause11.title}</h4>
              <p>{data.cgv.clause11.para1}</p>
              <p>{data.cgv.clause11.para2}</p>
              <p>{data.cgv.clause11.para3}</p>
              <p>{data.cgv.clause11.para4}</p>
              <p>{data.cgv.clause11.para5}</p>
              <p>{data.cgv.clause11.para6}</p>
              <p>{data.cgv.clause11.para7}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause12.title}</h4>
              <p>{data.cgv.clause12.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause13.title}</h4>
              <p>{data.cgv.clause13.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause14.title}</h4>
              <p>{data.cgv.clause14.para1}</p>
              <p>{data.cgv.clause14.para2}</p>
              <p>{data.cgv.clause14.para3}</p>
              <p>{data.cgv.clause14.para4}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause15.title}</h4>
              <p>{data.cgv.clause15.para}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause16.title}</h4>
              <p>{data.cgv.clause16.para1}</p>
              <p>{data.cgv.clause16.ul}</p>
              <ul>
                <li>{data.cgv.clause16.li1}</li>
                <li>{data.cgv.clause16.li2}</li>
                <li>{data.cgv.clause16.li3}</li>
                <li>{data.cgv.clause16.li4}</li>
                <li>{data.cgv.clause16.li5}</li>
                <li>{data.cgv.clause16.li6}</li>
              </ul>
              <p>{data.cgv.clause16.para2}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause17.title}</h4>
              <p>{data.cgv.clause17.para1}</p>
              <p>{data.cgv.clause17.para2}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause18.title}</h4>
              <p>{data.cgv.clause18.para1}</p>
              <p>{data.cgv.clause18.para2}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause19.title}</h4>
              <p>{data.cgv.clause19.para1}</p>
              <p>{data.cgv.clause19.para2}</p>
              <p>{data.cgv.clause19.para3}</p>
            </section>
            <section className='margin'>
              <h4>{data.cgv.clause20.title}</h4>
              <p>{data.cgv.clause20.para}</p>
            </section>
           
            <Footer />
          </div>
        )
      }</>
  )
}

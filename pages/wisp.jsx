import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as locales from '../assets/locales';

export default function Wisp() {

	const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])

	return (
		<>
			{
				data && (
					<div>
						<Header  data={data}/>
						<section className='section-one'>
							<div className='margin-lr'>
								<div className='padding-tb'>
									<h2 className='test-weight'><span className='green'>WISP</span></h2>
									<h2>{data.wisp.title}</h2>
								</div>
								<img className='solutions-img' src={data.wisp.img} />
								{data.wisp.text.map(t => (
									<p key={t.p}>{t.p}</p>
								))}
							</div>
						</section>
						<section className='margin'>
            <h3 className='padding-tb'>{data.wisp.partnertitle}</h3>
            <div className='content-col'>
              {data.wisp.partners.map(partner => (
                <div key={partner.id} className='column-2 partenaire'>
                  <img src={partner.logo}/>
                </div>
              ))}
            </div>
          </section>
						<Footer />
					</div>
				)
			}</>
	)
}

import React, { useState } from 'react';
import { useRouter } from "next/router";

const LavenderPicto = (props) => {

  const { locale } = useRouter();
  const [data, setData] = useState();

  fetch(`/locales/${locale}.json`)
    .then(resp => resp.json())
    .then(res => setData(res))
  
  return (
    <>
    {data &&
    (
      <section className='lavender-bg'>
    <div className='margin'>
      <h3 className='padding-tb'>{data.landing.bubblestitle}</h3>
      <div className='content-col'>
        {data[props.bubble].bubbles.map(picto => (
          <div key={picto.text} className='column-3 six'>
            <img className='picto' src={picto.img} />
            <p  className='center'>{picto.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
    )}
    </>
  )
}

export default LavenderPicto;
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import * as locales from '../assets/locales';

const LavenderPicto = (props) => {

    const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])
  
  return (
    <>
    {data &&
    (
      <section className='lavender-bg'>
    <div className='margin'>
      <h3 className='padding-tb'>{data[props.bubble].bubblestitle}</h3>
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
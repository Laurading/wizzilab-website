import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import * as locales from '../assets/locales';
import Link from 'next/link';

const Footer = () => {

  const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  }, [locale])

  return (
    <>
      {data && (
        <div className="footer">
          <div className="margin-lr">
            <div className="content-col space-between">
              <div className="column-5 wrap">
                <img src="img/footer/frenchtech.png" />
              </div>
              <div className="column-5 wrap">
                <img src="img/footer/offreur.png" />
              </div>
              <div className="column-5 wrap">
              <Link href="/privacypolicy">
                  <a className="cultured footer-text">{data.footer.privacypolicy}</a>
                </Link>
              </div>
              <div className="column-5 wrap">
              <Link href="/cgv">
                  <a className="cultured footer-text">{data.footer.cgv}</a>
                </Link>
              </div>
              <div className="column-5 wrap">
              <a className="cultured footer-text nothinghover">© Copyright WizziLab</a>
              </div>
            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Footer;
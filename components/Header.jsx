import React, { useState, useEffect, useRef } from 'react';
import Contact from './Contact';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = ({data}) => {

  const { locales } = useRouter();

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  
  const windowLocation = window.location.href;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
      {data && (
        <div>
          <header className={goingUp === false ? "onscroll" : ""}>

            <nav className="margin">
              <div className='logo-content'>
              <Link href='/'>
                <a className='logo'>
                  <img src='/img/logo/wizzilab.png' />
                </a>
              </Link>
              </div>
              <ul className='margin-header'>
                <li className='deroulant'>
                  <a>{data.header.solutions}</a>
                  <ul className='sous'>
                    <li><Link href='/wolt'><a>Wolt</a></Link></li>
                    <li><Link href='/wizzipark'><a>Wizzipark</a></Link></li>
                    {/* <li><Link href='/u-guard'><a>U-Guard</a></Link></li> */}
                    <li><Link href='/wisp'><a>Wisp</a></Link></li>
                  </ul>
                </li>
                <li>
                  <Link href='/support'><a>Support</a></Link>
                </li>
                <li className='deroulant'>
                  <a>{data.header.about}</a>
                  <ul className='sous'>
                    <li><Link href='/wizziteam'><a>Wizziteam</a></Link></li>
                    <li><Link href='/savoir-faire'><a>{data.header.knowhow}</a></Link></li>
                  </ul>
                </li>
                <li>
                  <a onClick={() => setButtonPopup(true)} className='contact-button'>Contact</a>
                </li>
              </ul>
            </nav>
            <Contact trigger={buttonPopup} setTrigger={setButtonPopup} data={data}/>
          </header>

          <div className='language-content'>
            <ul>
              {locales.map((loc) => (
                <li key={loc}>
                  <Link href={windowLocation} locale={loc}>
                    <a className='language-link'>{loc}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )}
    </>
  )
}

export default Header;
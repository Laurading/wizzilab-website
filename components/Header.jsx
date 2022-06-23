import React, { useState, useEffect, useRef } from 'react';
import Contact from './Contact';
import Link from 'next/link'

const Header = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

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
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);


  const [buttonPopup, setButtonPopup] = useState(false)


  return (
    <header className={goingUp === false ? "onscroll" : ""}>
      <nav className="margin">
        <Link href='/'>
          <a className='logo'>
            <img src='/img/logo/wizzilab.png' />
          </a>
        </Link>

        <ul className='margin-header'>
          <li className='deroulant'>
            <a>Nos solutions</a>
            <ul className='sous'>
              <li><Link href='/wolt'><a>Wolt</a></Link></li>
              <li><Link href='/wizzipark'><a>Wizzipark</a></Link></li>
              {/* <li><Link href='/u-guard'><a>U-Guard</a></Link></li> */}
              <li><Link href='/wisp'><a>Wisp</a></Link></li>
            </ul>
          </li>
          <li>
            <a href='https://wizzilab.com/wiki/#!index.md'>Support</a>
          </li>
          <li className='deroulant'>
            <a>A propos</a>
            <ul className='sous'>
              <li><Link href='/wizziteam'><a>Wizziteam</a></Link></li>
              <li><Link href='/savoir-faire'><a>Notre savoir-faire</a></Link></li>

            </ul>
          </li>
          <li>
            <a onClick={() => setButtonPopup(true)} className='contact-button'>Contact</a>
          </li>
        </ul>

      </nav>
      <Contact trigger={buttonPopup} setTrigger={setButtonPopup} />
    </header>
  )
}

export default Header;
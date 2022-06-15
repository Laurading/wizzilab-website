import React, { useState, useEffect, useRef } from 'react';
import Contact from './Contact';

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
                <a className='logo'href='/'>
                  <img src='/img/logo/wizzilab.png'/>
                </a>
                <ul className='margin-header'>
                    <li className='deroulant'>
                        <a>Nos solutions</a>
                          <ul className='sous'>
                            <li><a href='/wolt'>Wolt</a></li>
                            <li><a href='/wizzipark'>Wizzipark</a></li>
                            <li><a href='/u-guard'>U-Guard</a></li>
                            <li><a href='/wisp'>Wisp</a></li>
                          </ul>
                    </li>
                    <li>
                        <a href='https://wizzilab.com/wiki/#!index.md' target="_blank">Support</a>
                    </li>
                    <li className='deroulant'>
                        <a>A propos</a>
                        <ul className='sous'>
                          <li><a href='/savoir-faire'>Notre savoir-faire</a></li>
                          <li><a href='/wizziteam'>Wizziteam</a></li>
                        </ul>
                    </li>
                    <li>
                    <a onClick={() => setButtonPopup(true)} className='contact-button'>Contact</a>
                    </li>
                </ul>

            </nav>
            <Contact trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </header>
    )
}

export default Header;
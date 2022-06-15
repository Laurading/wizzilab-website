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
                <img src='/img/logo/wizzilab.png' />
                <ul>
                    <li>
                        <a>Nos solutions</a>
                        {/* <ul>
                            <li>Wolt</li>
                            <li>Wizzipark</li>
                            <li>U-Guard</li>
                            <li>Wisp</li>
                        </ul> */}
                    </li>
                    <li>
                        <a>Support</a>
                    </li>
                    <li>
                        <a>A propos</a>
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
import React, { useState, useEffect, useRef } from 'react';

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
                    <a className='contact-button'>Contact</a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;


const Header = () => {
    return (
        <header>
            <nav className="margin">
                <img src='/img/logo/wizzilab.png' />
                <ul>
                    <li>
                        <a>Nos solutions</a>
                    </li>
                    <li>
                        <a>Ressources</a>
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
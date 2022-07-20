import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import * as locales from '../assets/locales';
import Link from 'next/link';

const Footer = () => {

    const { locale } = useRouter();
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(locales[locale])
    },[locale])

    return (
        <>
        {data && (
            <div className="footer">
            <div className="margin-lr">
                <div className="content-col">
                    <div className="column-2 wrap">
                        <img src="img/footer/frenchtech.png" />
                        <img src="img/footer/offreur.png"/>
                    </div>
                    <div className="column-2 wrap space-between">
                        <Link href="/privacypolicy">
                            <a className="cultured">{data.footer.privacypolicy}</a>
                        </Link>
                        <Link href="/cgv">
                            <a className="cultured">{data.footer.cgv}</a>
                        </Link>
                        <p className="cultured">© Copyright WizziLab</p>
                    </div>
                </div>

            </div>

        </div>
        )}
        </>
    )

}

export default Footer;
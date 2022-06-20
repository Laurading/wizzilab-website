import React from 'react';

const Contact = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={() => props.setTrigger(false)} className='close-btn'><img src='/img/close.svg'/></button>
                <div className='content-col-contact'>
                    <div className='column-3 left denim-bg radius-right'>
                        <div className='content-col'>
                            <div className='column'>
                            <h4 className='cultured padding-tb'>CONTACT</h4>
                        <p className='cultured'>
                            contact@wizzilab.com
                        </p>
                        <p className='cultured'>
                            +33 (0)6 95 14 88 16
                        </p>
                            </div>
                            <div className='column'>
                                
                        <h4 className='cultured padding-tb'>WIZZILAB</h4>
                        <p className='cultured'>
                            2 Boulevard du Général de Gaulle
                        </p>
                        <p className='cultured'>
                            92120 Montrouge
                        </p>
                        <p className='cultured'>
                            France
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className='column-3x2'>
                        <div className='padding-contact'>
                            <h3>N’HESITEZ PAS, CONTACTEZ-NOUS!</h3>
                        </div>
                        <div className='content-col-contact'>
                            <div className='column-3 left'>
                                <input type="text" placeholder="Nom" />
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className='column-3 left'>
                                <input type="text" placeholder="Société" />
                                <input type="text" placeholder="Téléphone" />
                            </div>
                        </div>
                        <div className='padding-contact'>
                            <textarea placeholder="Message" />
                        </div>
                        <div className='center'>
                            <button>Envoyer</button>
                        </div>

                    </div>
                </div>
                
            </div>

        </div>
    ) : "";
}

export default Contact;
import React from 'react';

const Contact = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
            <div className='content-col'>
                <div className='column-3x2'>
                <h3>My popup</h3>
                <div className='content-col'>
                    <div className='column-3 left'>
                        <input className='effect-1' type="text" placeholder="Nom"/>
                        <span class="focus-border"></span>
                    </div>
                    <div className='column-3 left'>
                        test
                    </div>
                </div>
                </div>
                <div className='column-3 left denim-bg'>
                <button onClick={() => props.setTrigger(false)} className='close-btn'>close</button>
                <h4 className='cultured'>CONTACT</h4>
                </div>
              </div>
              
              
                
            </div>

        </div>
    ) : "";
}

export default Contact;
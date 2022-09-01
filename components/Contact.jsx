import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import * as locales from '../assets/locales';

const Contact = (props) => {

  const [content, setContent] = useState({ name: '', email: '', society: '', phoneNumber: '', message: '' });
  const [response, setResponse] = useState({ status: 0 })
  const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])

  const SendMail = (event, content) => {
    
    event.preventDefault();
    console.log(content)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic N2VlOTA1NTUyOWNhNThkNTNjNTg1YjBlMWVkOGU0NTQ6ZDMzODMzZjhkOWFhYmY5NTkxNGRhM2U1YmQxNDg4Yzc=");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Messages":
        [{
          "From":
          {
            "Email": `${content.email}`

          },
          "To": [{
            "Email": "contact@wizzilab.com",
          }],

          "Subject": "On a essayé de vous contacter",
          "TextPart":
            `
              Nom : ${content.name},
              Email : ${content.email},
              Société : ${content.society},
              Téléphone : ${content.phoneNumber},
              Message : ${content.message},
            `
        }]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${window.location.origin}/mailjet/send`, requestOptions)
      .then(resp => {
        setResponse(resp);
        setTimeout(() => setResponse({ status: 0 }), 10000);
        console.log(response.status);
        console.log('======success=======');
        console.log(resp);
      })
      .catch(err => {
        console.log('======failure=======');
        console.log(err);
      });
  }
  return (props.trigger) ? (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          <button onClick={() => props.setTrigger(false)} className='close-btn'><img src='/img/close.svg' /></button>
          <div className='content-col-contact'>
            <div className='column-3 left denim-bg'>
              <div className='content-col'>
                <div className='padding-tb'>
                  <h4 className='cultured mobile-hidden'>CONTACT</h4>
                  <p className='cultured'>
                    contact@wizzilab.com
                  </p>
                  <p className='cultured'>
                    +33 (0)6 95 14 88 16
                  </p>
                </div>
                <div className='padding-tb'>
                  <h4 className='cultured mobile-hidden'>WIZZILAB</h4>
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
                {data && (
                  <h3 className='padding-top'>{data.header.contact.contactus}</h3>
                )}
              </div>
              <form method="post" onSubmit={(e) =>  SendMail(e,content)}>
                {data && (
                  <div className='content-col-contact'>
                  <div className='column-3 left'>
                    <input type="text" placeholder={data.header.contact.name} required onChange={(e) => setContent({ ...content, name: e.target.value })} />
                    <input type="email" placeholder="Email" required onChange={(e) => setContent({ ...content, email: e.target.value })} />
                  </div>
                  <div className='column-3 left'>
                    <input type="text" placeholder={data.header.contact.society} required onChange={(e) => setContent({ ...content, society: e.target.value })} />
                    <input type="tel" placeholder={data.header.contact.phonenumber} required onChange={(e) => setContent({ ...content, phoneNumber: e.target.value })} />
                  </div>
                </div>
                )}
                <div className='padding-contact'>
                  <textarea placeholder="Message" required onChange={(e) => setContent({ ...content, message: e.target.value })} />
                </div>
                <div className='padding-contact'>
                  {response.status !== 0 && response.status !== 200 && <>
                    <p className='underline align-left'>Erreur, veuillez réessayer ultérieurement</p>
                  </>
                  }
                  {response.status === 200 && 
                    <p className='underline align-left'>Merci pour votre message, à bientôt!</p>
                  }
                </div>
                <div className='center'>
                  {data && (
                    <button type='submit'>{data.header.contact.send}</button>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default Contact;
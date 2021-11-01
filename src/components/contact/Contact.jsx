import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';
function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_59yqaia',
        'template_jodusur',
        formRef.current,
        'user_ElMPZ9dzq58nfiwWimapL'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +84 0902 0919 99
            </div>
            <div className='c-info-item'>
              <img src={Email} alt='' className='c-icon' />
              quangkhanh2999@gmail.com
            </div>
            <div className='c-info-item'>
              <img src={Address} alt='' className='c-icon' />
              273 Cổ Nhuế, Bắc Từ Liêm, Hà Nội, Việt Nam
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type='text'
              style={{ backgroundColor: darkMode && '#333' }}
              placeholder='Name'
              name='user_name'
            />
            <input
              type='text'
              style={{ backgroundColor: darkMode && '#333' }}
              placeholder='Subject'
              name='user_subject'
            />
            <input
              type='text'
              style={{ backgroundColor: darkMode && '#333' }}
              placeholder='Email'
              name='user_email'
            />
            <textarea
              rows='5'
              style={{ backgroundColor: darkMode && '#333' }}
              placeholder='Message'
              name='message'
            ></textarea>
            <button>Submit</button>
            {done && 'Thank you'}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

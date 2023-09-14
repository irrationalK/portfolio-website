import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegram, FaCheckCircle} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ufme23r', 'template_z8wsdhe', form.current, 'sPgoRH8AupoVzCcNd')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);

          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevin.lu@live.de</h5>
            <a href='mailto:kevin.lu@live.de' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@lu_kev</h5>
            <a href='https://t.me/lu_kev' target='_blank'>Send a message</a>
          </article>
        </div>
              {/* End of Contact options  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea> 
          <button type='submit' className='btn'>Send Message</button>  
          <div className={`success-notification ${messageSent ? 'active' : ''}`}>
            <FaCheckCircle /> Your message has been sent successfully!
          </div>
 
        </form>
      </div>

    </section>
  )
}

export default Contact
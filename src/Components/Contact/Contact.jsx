import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
        </div>

        <div className= 'contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>Lipsum dolor sit,orem  amet consectetur adipisicing elit.Temporibus natus non quae delectus voluptas eaque ipsam aspernatur!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt='mail image'/><p>kartikneelgund028@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt='mail image'/><p>+91 1234567890</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt='mail image'/><p>India</p>
                    </div>
                </div>
            </div>
            
            <form className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>

                    <label htmlFor=''>Your Email</label>
                    <input type='text' placeholder='Enter your email' name='email'/>

                    <label htmlFor=''>Write your message here</label>
                    <textarea type='meassage' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit </button>

            </form>
        </div>
    </div>
  )
}

export default Contact
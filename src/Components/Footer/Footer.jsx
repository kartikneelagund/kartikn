import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt=''/>
         
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt=''/>
            <input type='email' placeholder='Enter Your email'/>
          </div>
          <div className='footer-send'>Send</div>
        </div>
      </div>
      <hr/>
      <div className='footer-bottom'>
        <p>@ 2025 kartik neelagund</p>
        <p>Term of Services</p>
        <p>Privecy Policy</p>
        <p>Contact with me</p>
      </div>
    </div>
  )
}

export default Footer
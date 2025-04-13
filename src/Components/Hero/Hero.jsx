import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.png"

const Hero = () => {
  return (
   <>
    <div id='home' className='hero'>
      <img src={profile_img} alt='profile image'/> <img/>
      <h1><span>I'm Kartik Neelagund,</span>Frontend Developer</h1> 
      <p>As a Frontend Developer, I specialize in creating visually engaging, user-friendly websites and web applications.</p>
      <div className='hero-action'>
        <a className='hero-connect' href='https://www.linkedin.com/in/kartik-neelagund-235b7b358/' target='_blank'>LinkedIn Profile</a>
        <a className='hero-resume' href='https://drive.google.com/drive/u/1/folders/0AISoJ92M0jcBUk9PVA' target='_blank'>My resume</a>
      </div>
    </div>
  
    </>
  )
}

export default Hero
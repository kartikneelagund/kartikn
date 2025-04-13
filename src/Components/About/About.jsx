import React from 'react'
import './About.css'
import profile_img from '../../assets/kartik.jpg'

const About = () => {
  return (
    <>
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About</h1>
        </div>
        <div className='about-section'>
            
            <div className='about-left'>
                <div className='about-para'>
                    <h1>Web Developer !</h1>
                    <p>I'm Frontend Developer is responsible for creating the user interface and user experience of web applications. They use technologies like HTML, CSS, and JavaScript along with frameworks like React, Assisted in developing and maintaining responsive web applications using HTML, CSS, JavaScript, React.Js</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"55%"}}/></div>
                    <div className='about-skill'><p>React Js</p><hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>Bootstrap</p><hr style={{width:"50%"}}/></div>

                </div>

            </div>
            <div className='about-right'>
                <img src={profile_img}></img>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>01</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className='about-achievement'>
                <h1>04+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <div className='about-achievement'>
                <h1>03+</h1>
                <p>HAPPY CLINT</p>
            </div>

        </div>
    </div>

    </>
  )
}

export default About
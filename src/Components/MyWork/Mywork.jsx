import React from 'react'
import './Mywork.css'

import project1_img from '../../assets/project_1.png'
import project2_img from '../../assets/project_2.png'
import project3_img from '../../assets/project_3.png'
import project4_img from '../../assets/project_4.png'
import project5_img from '../../assets/project_5.png'
// import mywork_data from '../../assets/mywork_data' 
import arrow_icon from '../../assets/arrow_icon.svg'


const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
        </div>
        <div className='mywork-container'>
            {/* {mywork_data.map((work,index)=>{
                return <h3><img  key={index} src={work.w_img} alt='work.w_img'/></h3>
            })} */}
            <a href="https://intrelsys.com/" target='_blank'>
            <img src={project1_img} alt="HTML tutorial" />
            </a>
            <a href="https://kartikneelagund.github.io/coffeshop/" target='_blank' >
            <img src={project2_img} alt="HTML tutorial" />
            </a>
            <a href="https://kartikneelagund.github.io/Guess-Number-Game/" target='_blank'>
            <img src={project3_img} alt="HTML tutorial" />
            </a>
            <a className='single' href="https://kartikneelagund.github.io/Rock-Paper-Scissors/" target='_blank'>
            <img src={project4_img} alt="HTML tutorial" />
            </a>
            
            <a className='single'  target='_blank'>
            <img src={project5_img} alt="HTML tutorial" />
            </a>
            <a className='single'  target='_blank'>
            <img src={project5_img} alt="HTML tutorial" />
            </a>
        </div>
        
        <div className='mywork-showmore'>
           <a href="https://github.com/kartikneelagund" target='_blank'>
            <p>Show More</p>
            <img src={arrow_icon} alt='arrw_icon'></img>
            </a>
        </div>
    </div>
  )
}

export default Mywork


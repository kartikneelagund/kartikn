import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className ='services'>
        <div className='services-title'>
            <h1>Services</h1>
        </div>   
        <div className ='services-container'>
            <div className = 'services-format' >
                <h3>01</h3>
                <h2>Frontend Development</h2>
                <p>Frontend Development is the process of building, programming..</p>
            
                <div className = 'services-readmore' >
                        <p>Read Me</p>
                        <img src={arrow_icon} alt=''></img>
                </div>
            </div>
            <div className = 'services-format' >
                <h3>02</h3>
                <h2>portrait drawings</h2>
                <p>Drawing is the process of constructing a picture from imagination 0r observation..</p>
            
                <div className = 'services-readmore' >
                        <p>Read Me</p>
                        <img src={arrow_icon} alt=''></img>
                </div>
            </div>
            <div className = 'services-format' >
                <h3>03</h3>
                <h2>Graphics design</h2>
                <p>Graphics design is the process of building, designs..</p>
            
                <div className = 'services-readmore' >
                        <p>Read Me</p>
                        <img src={arrow_icon} alt=''></img>
                </div>
            </div>
            {/* {Services_Data.map((Service, index)=>{
                return <div key={index} className='services-format'>
                    <h3>{Service.s_no}</h3>
                    <h2>{Service.s_name}</h2>
                    <p>{Service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read Me</p>
                        <img src={arrow_icon} alt=''></img>
                    </div>
                </div>
            })} */}

        </div> 
    </div>
  )
}

export default Services
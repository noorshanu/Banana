import React from 'react'
import Logo from '../../images/logo.png';
import BananaChart from '../../images/chart.png'
import './About.css'
import Mission from './Mission';
function About() {
  return (
    <section className='about-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <div className=''>
                    <span>
                    What is 
                    </span> <br/>
                    <h1> <img src={Logo} alt="" />?</h1>     
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>          
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 

                </div>
                </div>

                <div className='col-md-6'> 

                <div className='about-box'>
                    <div className='sub-about-box'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <img src={BananaChart} alt=''/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

                    </div>

                </div>

                </div>

            </div>

        </div>

        <Mission/>
       </section>
  )
}

export default About
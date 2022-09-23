import React from 'react'
import Button from '../../images/button.png'
import {FaTwitter,
        FaTelegram,
        FaDiscord,
        FaYoutube,
        FaGithub,
        FaInstagram
} from 'react-icons/fa'

function ConnectSection() {
  return (
    <section className='connect-section'>
        
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <div className='connect-head'><h2>Connect With The Community!</h2></div>
                    
                    <div className='social-connect'>
                        <ul className='d-flex'>
                            <li><FaTwitter/></li>
                            <li><FaTelegram/></li>
                            <li><FaDiscord/></li>
                            <li><FaGithub/></li>
                            <li><FaYoutube/></li>
                            <li><FaInstagram/></li>
                        </ul>

                    </div>


                </div>

                <div className='col-md-6 text-center'>
                    <div className='connect-img'>  
                    <img src={Button} alt=''/>
                    </div>
                    

                </div>
                
            </div>
            
        </div></section>
  )
}

export default ConnectSection
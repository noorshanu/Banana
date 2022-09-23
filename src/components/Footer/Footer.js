import React from 'react'
import Logo from '../../images/logo.png'
import Insta from '../../images/icon/insta.png'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={Logo} alt=''/>
          </div>

          <div className='col-md-3'>
            <div>
              <a href='/'><p>How to Play</p></a>
              <a href='/'><p>Whitepaper</p></a>
              <a href='/'><p>Features</p></a>
              <a href='/'><p>Blog</p></a>
              <a href='/'><p>Pitchdeck</p></a>
            </div>
          </div>

          <div className='col-md-3'>
          <div>
              <a href='/'><p>About Us</p></a>
              <a href='/'><p>Disclaimer</p></a>
              <a href='/'><p>FAQ</p></a>
              <a href='/'><p>Cookies Policy</p></a>
              <a href='/'><p>Privacy Policy</p></a>
              <a href='/'><p>Terms Of Service</p></a>
            </div>

          </div>

          <div className='col-md-3'>
            <div>
              <span>Subscribe to our newsletter to get all the updates and announcements</span>
              <div className='d-flex'>
                <input type="text" name="" value=""/>
                <button>Subscribe</button>

              </div>
              <div className='footer-social'>
                <a href='/'><img src={Insta} alt=''/></a>

              </div>
            </div>

          </div>

        </div>

      </div>
      </footer>
  )
}

export default Footer
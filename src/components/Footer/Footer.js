import React from 'react'
import Logo from '../../images/logo.png'
import Insta from '../../images/icon/insta.png'
import Tweet from '../../images/icon/tweet.png'
import Git from '../../images/icon/github.png'
import Discord from '../../images//icon/discord.png'
import Youtube from '../../images/icon/youtube.png'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-box'>

     
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-6'>
            <img src={Logo} alt='' className='footer-logo'/>
          </div>

          <div className='col-md-3 col-6'>
            <div className='footer-nav'>
              <a href='/'><p>How to Play</p></a>
              <a href='/'><p>Whitepaper</p></a>
              <a href='/'><p>Features</p></a>
              <a href='/'><p>Blog</p></a>
              <a href='/'><p>Pitchdeck</p></a>
              <a href='/'><p>Partners</p></a>
            </div>
          </div>

          <div className='col-md-3 col-6'>
          <div className='footer-nav'>
              <a href='/'><p>About Us</p></a>
              <a href='/'><p>Disclaimer</p></a>
              <a href='/'><p>FAQ</p></a>
              <a href='/'><p>Cookies Policy</p></a>
              <a href='/'><p>Privacy Policy</p></a>
              <a href='/'><p>Terms Of Service</p></a>
            </div>

          </div>

          <div className='col-md-3 col-6'>
            <div className='footer-nav'>
              <span>Subscribe to our newsletter to get all the updates and announcements</span>
              <div className='d-flex footer-form justify-content-evenly'>
                <input type="text" name="" value=""/>
                <button>Subscribe</button>

              </div>
              <div className='footer-social d-flex justify-content-evenly'>
                <a href='/'><img src={Insta} alt=''/></a>
                <a href='/'><img src={Tweet} alt=''/></a>
                <a href='/'><img src={Discord} alt=''/></a>
                <a href='/'><img src={Git} alt=''/></a>
                <a href='/'><img src={Youtube} alt=''/></a>

              </div>
            </div>

          </div>

        </div>
<div className='d-flex justify-content-evenly fs-14'>
  <p>
  Business Inquiries - business@bananacoin.com
  </p>
<p>
Support - support@bananacoin.com
</p>
</div>
      </div>
      </div>
      <div className='container'>
        <div className='text-center copyright '>
          <span>© 2022 - All rights reserved. Banana Coin Inc.</span>
        </div>

      </div>
      </footer>
  )
}

export default Footer
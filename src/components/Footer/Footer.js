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
<div className='d-flex'>
  <p>
  Business Inquiries - business@bananacoin.com
  </p>
<p>
Support - support@bananacoin.com
</p>
</div>
      </div>
      </footer>
  )
}

export default Footer
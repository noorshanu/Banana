import React from 'react'
import './Hero.css'
import HeroImg from '../../images/hero.png'
import HeroImg2 from '../../images/hero1.png'
import Side from '../../images/side-1.png'
import ConnectSection from './ConnectSection'

function Hero() {
  return (
    <>
    <img className='side-left'  src={Side}  alt=''/>
    <img className='side-right'  src={Side}  alt=''/>
    <section className='hero-section'>

        <div className='container'>
            <div className='row'>
                <div className='col-md-2 '>
                    <h1 className='hero-top-h'>Future of 
                            Play To Earn</h1>
                    <p className='hero-top-p'>With banana coin you can stake your earning to win ApeCoins, and even BAYC NFTs.</p>
                        <div>
                            <span className='hero-top-s1'>Powered by </span> <br/>
                            <span>BNB Chain</span>

                            </div>

                </div>

                <div className='col-md-6'>
                <div className='hero-img-1'>
                    <img src={HeroImg} alt="" />
                </div>
                </div>

                <div className='col-md-3 hero-3rd'>
                  
                    <img src={HeroImg2} alt="" className='hero-img-2' />
                    <p className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                         ex ea commodo consequat.
                         Duis aute irure dolor in reprehen</p>



                </div>

            </div>

        </div>

    </section>
    <ConnectSection/>
    </>
  )
}

export default Hero
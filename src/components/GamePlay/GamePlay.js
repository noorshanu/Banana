import React from 'react'
import Line from '../../images/line.png'
import Tv from '../../images/icon/tv.png'
import Lets from '../../images/button.png'
import './Game.css'
function GamePlay() {
  return (
    <section className='game-play'>
        <div className='container'>
            <div className='head-game text-center'>
                <h1>GAMEPLAY</h1>
             <img src={Line} alt=''/>

            </div>
            <div className='row'>
                <div className='col-md-3'>
                
                    <div className='game-box text-center'>
                    <div className='game-box-img text-center'>
                            <img src={Tv} alt='tv'/>

                        </div>
                        <div className='game-box-title text-center'>
                            <h2>Virtual Competition</h2>
                        </div>
                        <div className='game-box-para'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                 reprehenderit in voluptate</p>
                        </div>

                    </div>

                </div>

                <div className='col-md-3'>
                <div className='game-box text-center'>
                    <div className='game-box-img text-center'>
                            <img src={Tv} alt='tv'/>

                        </div>
                        <div className='game-box-title text-center'>
                            <h2>Virtual Competition</h2>
                        </div>
                        <div className='game-box-para'>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                  Duis aute irure dolor in reprehenderit in voluptate</p>
                        </div>

                    </div>

                </div>

                <div className='col-md-3'>
                <div className='game-box text-center'>
                    <div className='game-box-img text-center'>
                            <img src={Tv} alt='tv'/>

                        </div>
                        <div className='game-box-title text-center'>
                            <h2>Virtual Competition</h2>
                        </div>
                        <div className='game-box-para'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        </div>

                    </div>

                </div>

                <div className='col-md-3'>
                <div className='game-box text-center'>
                    <div className='game-box-img text-center'>
                            <img src={Tv} alt='tv'/>

                        </div>
                        <div className='game-box-title text-center'>
                            <h2>Virtual Competition</h2>
                        </div>
                        <div className='game-box-para'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                 reprehenderit in voluptate</p>
                        </div>

                    </div>

                </div>
                

            </div>

            <div className='lets-talk text-center'>
                <h2>Try It Out Now!</h2>
                <img  src={Lets} alt=''/>


            </div>

        </div>
    </section>
  )
}

export default GamePlay
import React from 'react'
import './Roadmap.css'
import RoadmapImg from '../../images/roadmap-connector.svg'

function Roadmap() {
  return (
    <section className='roadmap'>
      <div className='container'>
        <div className='road-head'>
          <h1>ROADMAP</h1>
        </div>
        <div className='box'>
      <main className='roadmap-road'>
      <div className="left-roadmap">
              <div className="roadmap-card">
                <div className="roadmap-mobile-line"></div>
                <div>
                  <p className="roadmap-date weight-7">Phase 1. 2022 </p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. Launch on BSC mainnet 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. 29th August - Private sale for 10 days only 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    3. Smart contract security audit 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    4.  Pre-sale for 20 days 
                  </p>
                </div>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-mobile-line"></div>
                <div className="road-mob-2">
                  <p className="roadmap-date weight-7">Phase 3 2023 
</p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. Staking for KBT and other cryptos - January 2023

                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. Forex Trading features in the platform - February 2023

                  </p>
                </div>

                {/* <!-- mobres --> */}
                <div className="road-mob">
                  <p className="roadmap-date weight-7">Phase 2 2022 
</p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. Listing cmc and CG 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. Strong marketing strategy for growth 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    3. Platform Beta version launch - November 2022
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    4. Platform Public launch  other famous coin listing websites - Listing of token- December 2022
                  </p>
                </div>
              </div>
      
 
            </div>
            <div className="right-roadmap">
              <div className="roadmap-card">
                <div className="roadmap-mobile-line"></div>
                <div className="road-mob-2">
                  <p className="roadmap-date weight-7">Phase 2 2022 
</p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. Listing cmc and CG 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. Strong marketing strategy for growth 
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    3. Platform Beta version launch - November 2022
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    4. Platform Public launch  other famous coin listing websites - Listing of token- December 2022
                  </p>
                </div>
                <div className="road-mob">
                  <p className="roadmap-date weight-7">Phase 3 2023 
</p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. Staking for KBT and other cryptos - January 2023

                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. Forex Trading features in the platform - February 2023

                  </p>
                </div>
              </div>
              <div className="roadmap-card">
                <div className="roadmap-mobile-line"></div>
                <div>
                  <p className="roadmap-date weight-7">Phase-4 2023 
</p>
                  <img
                    src={RoadmapImg}
                    className="roadmap-connector"
                    alt=""
                  />
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    1. P2P Trading - March 2023
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    2. Swap features - April 2023
                  </p>
                  <p className="roadmap-card-title weight-4 lh-1_7">
                    3. Mobile apps - May 2023
                  </p>
                </div>
              </div>
            

       
            </div>
      </main>
      </div>


      </div>
      </section>
  )
}

export default Roadmap
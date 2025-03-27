'use client';
import React from 'react'
import './landingpage.scss'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="container">

        <section className='section-1'>
          <div className="row mx-auto justify-content-center align-items-center">
            <div className="first-col col-12 col-lg-6 p-0">
              <div className="sizer h-100">

                <div className="free-trial">- FREE 30 DAYS TRIAL</div>
                <h2 className="heading">Build beautiful presentations together</h2>
                <div className="sub-heading">Create and deliver impactful presentations in your browser, from anywhere - no installation required.</div>
                <div className="btns-containers-container">
                  <div className="btn-container">
                    <button className="btn first-btn">Try it for free</button>
                  </div>
                  <div className="btn-container">
                    <button className="btn second-btn">See how it works</button>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="second-col col-12 col-lg-6 p-0">
              <Image src='/images/section-1.svg' alt="google icon" width={500} height={500} />
              
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="collaboration-container">
            <h2 className="h2">Built for modern product teams.</h2>
            <div className="sup-heading">From next-gen startups to established enterprises.</div>
            <div className="row mx-auto border">

              <div className="col-6 col-lg-3 border collab-container">
                Gladstone
              </div>
              <div className="col-6 col-lg-3 border collab-container">
                Google
              </div>
              <div className="col-6 col-lg-3 border collab-container">
                Microsoft 
              </div>
              <div className="col-6 col-lg-3 border collab-container">
                Revo 
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
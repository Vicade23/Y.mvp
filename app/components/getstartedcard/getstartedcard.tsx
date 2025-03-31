import React from 'react'
import './getstartedcard.scss'
import Image from 'next/image'

const Getstartedcard = () => {
  return (
    <div className="getstartedcard card-container row mx-auto">

      <div className="first-col col-12 col-lg-6">
        <div className="sizer">

          <h2 className="h2">Get started with templates</h2>
          <div className="sub-heading">
            Bring your presentations to life in Google Slides with enhancements like videos, animations, smooth transitions, and more.
          </div>
          <div className="btns-containers-container">
            <div className="btn-container">
              <button className="btn first-btn">Try it for free</button>
            </div>
          </div>

        </div>
      </div>
      <div className="second-col col-12 col-lg-6">
        <Image src='/images/join.svg' alt="google icon" width={100} height={100} />
      </div>
    </div>
  )
}

export default Getstartedcard
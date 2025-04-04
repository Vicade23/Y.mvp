import React from 'react'
import './about-us.scss'

const AboutUs = () => {
  return (
    <div className='about-us'>
      
      <section className="section-1">
        
        <div className="hero">
          <div className="cover">
            <div className="container h-100">

              <div className="sizer">
                <h2 className="h2">About us</h2>
                <div className="tests-subtitle">
                  Here you can talk about your team and why people should join your company
                </div>
              </div>

            </div>
            

          </div>
          <div className="img-container"></div>
        </div>

      </section>
        
        <section className="section-2">
{/*             
            <div className="hero">
              <div className="cover"></div>
              <div className="img-container"></div>
            </div> */}

        </section>

        <div className="container">
            
          <section className="section-3">

            <div className="sizer">
              <h2 className="h2">Our mission</h2>
              <div className="tests-subtitle">
                Remember to talk about your mission. Why are you building this project? Who you are building this for? Why do you care about solving this problem? Why people should care?
              </div>
            </div>

          </section>
        </div>


    </div>
  )
}

export default AboutUs
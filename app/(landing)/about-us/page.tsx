import React from 'react'
import './about-us.scss'
import Image from 'next/image'
import Getstartedcard from '@/app/components/getstartedcard/getstartedcard'

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

        <div className="container">
          
          <section className="section-3">
  
            <div className="card-container row mx-auto align-items-center">
  
              <div className="col-lg-6 first-col">
                <div className="sizer">
                  <h2 className="h2">We can put a funny quote or slogan over here</h2>
                </div>
              </div>
              
              <div className="second-col col-12 col-lg-6">
                <Image src='/images/think.svg' alt="google icon" width={200} height={200} />
              </div>
  
            </div>
  
          </section>

          
          <section className="section-4">

            <div className="sizer">
              <h2 className="h2">Team</h2>
              <div className="tests-subtitle">
                Meet the people behind our magical product
              </div>
            </div>
            
            <div className="team row mx-auto">

              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>
              
              <div className="cols col-6 col-md-3 mb-4">
                <div className="mx-auto team-header border-danger">
                  <Image src='/images/avarter.png' alt="google icon" width={200} height={200} />
                </div>
                <div className="team-name">Name Name</div>
                <div className="team-role">Chief-E-Officer</div>
              </div>

            </div>

          </section>
        </div>
        
        <div className="container-fluid container-1 p-0">
            <div className="container">
                <section className="section-5">
                  <Getstartedcard />
                </section>
            </div>
        </div>


    </div>
  )
}

export default AboutUs
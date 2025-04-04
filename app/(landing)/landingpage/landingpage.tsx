'use client';
import React, { useEffect, useState } from 'react'
import './landingpage.scss'
import Image from 'next/image'
import { BRANDNAME } from '@/app/constants/namingconstants';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Getstartedcard from '@/app/components/getstartedcard/getstartedcard';
import { FaGithub, FaGoogle, FaMicrosoft } from 'react-icons/fa6'



const LandingPage = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0)
  const [slidderPgSize, setSlidderPgSize] = useState<number>(0)

  
  useEffect(() => {

    const handleScreenSize = () => {

      setScreenWidth(window.innerWidth);
      if(window.innerWidth <= 767) {
        setSlidderPgSize(1)
      }else if(window.innerWidth >= 768 && window.innerWidth <= 991) {
        setSlidderPgSize(2)
      } else if(window.innerWidth > 991) {
        setSlidderPgSize(3)
      }
    }
    handleScreenSize()

    window.addEventListener('resize', handleScreenSize);
    console.log(screenWidth)

    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, []);

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
            {/* <h2 className="h2">Built for modern product teams.</h2> */}
            <div className="sup-heading">Trusted by individuals and teams at the world{`'`}s best companies</div>
            <div className="row mx-auto">

              <div className="col-6 col-sm-3 collab-container">
                <div className="w-100 h-100 d-flex align-items-center text-center justify-content-center">
                  {/* Gladstone */}
                  <span className='bi bi-github me-2'><FaGithub /></span>
                  GitHub
                </div>
              </div> 
              <div className="col-6 col-sm-3 collab-container">
                <div className="w-100 h-100 d-flex align-items-center text-center justify-content-center">
                  <span className='bi bi-google me-2'><FaGoogle /></span>
                  Google
                </div>
              </div>
              <div className="col-6 col-sm-3 collab-container">
                <div className="w-100 h-100 d-flex align-items-center text-center justify-content-center">
                  <span className='bi bi-microsoft me-2'><FaMicrosoft /></span>
                  Microsoft 
                </div>
              </div>
              <div className="col-6 col-sm-3 collab-container">
                <div className="w-100 h-100 d-flex align-items-center text-center justify-content-center">
                  <span className='bi me-2'>RV</span>
                  Revo 
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid container-2 p-0">

          <div className="container">
            
              <section className="section-3">
                <div className="card-container row mx-auto">

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
                    <Image src='/images/goal.svg' alt="google icon" width={100} height={100} />
                  </div>
                </div>
              </section>

          </div>

      </div>

      <div className="container">
        <section className="section-4">

          <div className="card-container-1 row mx-auto align-items-center">

            <div className="second-col col-12 col-lg-6 order-1 order-lg-0">
              <Image src='/images/value-1.svg' alt="google icon" width={200} height={200} />
            </div>

            <div className="first-col col-lg-6 order-0 order-lg-1">
              <div className="sizer">
                <div className="feature">FEATURE NAME</div>
                <h2 className="h2">Explain the value of this first feature</h2>
                <div className="text-block">
                  Generate a slide with a simple prompt and your Drive content. Easily generate unique images, and visualize something that never existed. Try Gemini for Google Workspace today.
                </div>
                <div className="btns-containers-container">
                  <div className="btn-container">
                    <button className="btn">Button</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="card-container-2 row mx-auto align-items-center">

            <div className="col-lg-6 first-col">
              <div className="sizer">
                <div className="feature">FEATURE NAME</div>
                <h2 className="h2">Explain the value of this first feature</h2>
                <div className="text-block">
                  Generate a slide with a simple prompt and your Drive content. Easily generate unique images, and visualize something that never existed. Try Gemini for Google Workspace today.
                </div>
                <div className="btns-containers-container">
                  <div className="btn-container">
                    <button className="btn">Button</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="second-col col-12 col-lg-6">
              <Image src='/images/value-2.svg' alt="google icon" width={200} height={200} />
            </div>

          </div>

        </section>
      </div>

      <div className="container-fluid container-3 p-0">

          <div className="container">
            
              <section className="section-5">
                <div className="card-container row mx-auto">

                  <div className="first-col col-12 col-lg-6">
                    <div className="sizer">

                      <h2 className="h2">Get started with templates</h2>
                      <div className="sub-heading">
                        Bring your presentations to life in Google Slides with enhancements like videos, animations, smooth transitions, and more.
                      </div>
                      <div className="btns-containers-container">
                        <div className="btn-container">
                          <button className="btn first-btn">Sign up now</button>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="second-col col-12 col-lg-6">
                    <div className="sizer">
                      <div className="row-inside-sizer row mx-auto">

                        <div className="cols col-12 border-bottom border-2">
                          <h2 className="h2">Step 1</h2>
                          <div className="sub-heading">
                            Access, create, and edit Slides even without an internet connection, helping you stay productive from anywhere.
                          </div>
                        </div>
                        
                        <div className="cols col-12 border-bottom border-2">
                          <h2 className="h2">Step 2</h2>
                          <div className="sub-heading">
                            Access, create, and edit Slides even without an internet connection, helping you stay productive from anywhere.
                          </div>
                        </div>
                        
                        <div className="cols col-12">
                          <h2 className="h2">Step 3</h2>
                          <div className="sub-heading">
                            Access, create, and edit Slides even without an internet connection, helping you stay productive from anywhere.
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </section>

          </div>

      </div>
      
      <div className="container">
        <section className="section-6">
          <div className="additional-value">
            <h2 className="h2">Do more with {BRANDNAME}</h2>
            <div className="sup-heading"></div>
            <div className="row mx-auto" >


              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={slidderPgSize}
                navigation={screenWidth >= 768 && screenWidth <= 991 && true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=''
              >
                <SwiperSlide>
                  <div className="card border-0">
                    <div className="card-header border">
                      <Image src='/images/social-interaction-bro.svg' alt="google icon" width={200} height={200} />
                    </div>
                    <div className="card-body">
                      <div className="card-heading">
                        Work, wherever you are
                      </div>
                      <div className="card-context">
                      Access all of your Slides and Meet controls in one place, and enjoy smoother high resolution presentations.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div className="card border-0">
                    <div className="card-header border">
                      <Image src='/images/researchers.svg' alt="google icon" width={200} height={200} />
                    </div>
                    <div className="card-body">
                      <div className="card-heading">
                        Work, wherever you are
                      </div>
                      <div className="card-context">
                      Access all of your Slides and Meet controls in one place, and enjoy smoother high resolution presentations.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div className="card border-0">
                    <div className="card-header border">
                      <Image src='/images/rocket-research.svg' alt="google icon" width={200} height={200} />
                    </div>
                    <div className="card-body">
                      <div className="card-heading">
                        Work, wherever you are
                      </div>
                      <div className="card-context">
                      Access all of your Slides and Meet controls in one place, and enjoy smoother high resolution presentations.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid container-4 p-0">
          <div className="container">
              <section className="section-7">
                <Getstartedcard />
              </section>
          </div>
      </div>
      

    </div>
  )
}

export default LandingPage
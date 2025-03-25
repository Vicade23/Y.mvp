'use client';
import React, { useState } from 'react'
import './signup.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const SignUp = () => {
  const [emailMode, setEmailMode] = useState<boolean>(false)

  return (
    <div className='signup w-100 container-xxl'>
      <div className="row">

        <div className="columns col-lg-5 col-xl-4 d-flex justify-content-center align-items-center position-relative">
          <div className="contexts-container">
            {!emailMode && <div className="">
                
              <h2>Sign up to Enzol</h2>

              <div className="auth-connection">
                <button className="btn auth-google-btn d-flex align-items-center justify-content-center">
                  <span className='me-3'>
                    <Image src='/images/google icon.png' alt="google icon" width={25} height={25} />
                  </span> Sign up with Google
                </button>
              </div>

              <div className="or-container d-flex justify-content-center align-items-center">
                <div className="liner border-top p-0 m-0 w-100"></div>
                <span className='px-3'>or</span>
                <div className="liner border-top p-0 m-0 w-100"></div>
              </div>
              
              <div className="auth-email">
                <button className="btn auth-email-btn d-flex align-items-center justify-content-center" onClick={() => {setEmailMode(true)}}>Continue with email</button>
              </div>

              <div className="terms-text-container text-center">
                By creating an account you agree with our <Link href={'#'} className='links'>Terms of Service</Link>, <Link href={'#'} className='links'><br />Privacy Policy</Link>, and our default <Link href={'#'} className='links'>Notification Settings</Link>.
              </div>

              <div className="acc-check text-center">Already have an account? <Link href={'/auth/login'} className='links'>Sign In</Link></div>

            </div>}
            
            {emailMode && <div className="email-mood">

              <div className="back-btn-container position-fixed">
                <button className="btn border back-btn d-flex justify-content-center align-items-center" onClick={() => {setEmailMode(false)}}><MdOutlineArrowBackIosNew /></button>
              </div>
                
                <h2>Sign up to Enzol</h2>

                <form className="form w-100">
                  <div className="row w-100 mx-auto">
                    
                    <div className="col-6 cols form-input ps-0">
                      <label htmlFor="name" className='label'>Name</label>
                      <input type="text" id='name' className='w-100 input form-control' />
                    </div>

                    <div className="col-6 cols form-input pe-0">
                      <label htmlFor="username" className="label">Username</label>
                      <input type="text" id='username' className='w-100 input form-control' />
                    </div>
                    
                    <div className="col-12 cols form-input px-0">
                      <label htmlFor="email" className="label">Email</label>
                      <input type="email" id='email' className='w-100 input form-control' />
                    </div>
                    
                    <div className="col-12 cols form-input px-0">
                      <label htmlFor="password" className="label">Password</label>
                      <input type="password" id='password' className='w-100 input form-control' placeholder='7+ characters' />
                    </div>
                    
                    <div className="col-12 form-check d-flex align-items-start p-0">
                      <input type="checkbox" className='termsCheckBox' id='termsCheckBox' />
                      <label htmlFor="termsCheckBox" className="label form-check-label ps-3">
                        I agree with Dribbble's  <Link href={'#'} className='links'>Terms of Service</Link>, <Link href={'#'} className='links'>Privacy Policy</Link>, and our default <Link href={'#'} className='links'>Notification Settings</Link>
                      </label>
                      {/* <label htmlFor="username" className="label">Username</label>
                      <input type="radio" id='username' className='w-100 input form-control' /> */}
                    </div>
                    
                    <div className="col-12 cols auth-email-submit-container p-0">
                      <button className="btn auth-email-submit d-flex align-items-center justify-content-center">Create Account</button>
                    </div>

                  </div>
                </form>
  
                <div className="acc-check text-center mb-3">Already have an account? <Link href={'/auth/login'} className='links'>Sign In</Link></div>
  
              </div>}
          </div>
        </div>

        <div className="columns d-none d-lg-block col-lg-7 col-xl-8 px-0 position-relative">
          <div className="fixed-position h-100">
              
            <div className="d-none d-lg-flex align-items-center justify-content-center position-relative w-100 h-100">
                
              {/* <iframe className='w-100' height={600} src="https://lottie.host/embed/44fc1c79-b39c-4588-9a83-5b4c30bfb3ed/vUdiG9MUka.lottie"></iframe> */}
              <iframe className='w-100' height={600} src="https://lottie.host/embed/10d9e2a8-a156-483d-8c52-84006fd29538/1AuyTLivrA.lottie"></iframe>
              {/* <iframe className='w-100' height={600} src="https://lottie.host/embed/c861d67f-15b0-4407-8f90-1146db18a516/tcWshPPhNB.lottie"></iframe> */}
              <div className="cover position-absolute"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
import React from 'react'
import './contact-us.scss'

const page = () => {
  return (
    <div className="contact-us">
      
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


        <div className="container conts">
            <div className="row">
                <div className="cols-iframe-container col-md-6 p-3 order-1 order-md-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3946.6570959029655!2d4.494451082749902!3d8.43529427481509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjYnMDcuNiJOIDTCsDI5JzQwLjgiRQ!5e0!3m2!1sen!2sng!4v1743776582746!5m2!1sen!2sng" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6 px-md-5 order-0 order-md-1">
                    
                  <form className="form w-100">
                    <div className="row w-100 mx-auto">

                      <div className="col-12 cols form-input px-0">
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" id='name' className='w-100 input form-control' placeholder='Full Name' />
                      </div>

                      <div className="col-12 cols form-input px-0">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" id='email' className='w-100 input form-control' placeholder='Email address' />
                      </div>
                      
                      
                      <div className="col-12 cols form-input px-0">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea className='w-100 input form-control' placeholder='How can we get better' id='message'></textarea>
                      </div>
                      
                      <div className="col-12 cols auth-email-submit-container p-0">
                        <button className="btn auth-email-submit d-flex align-items-center justify-content-center">Send message</button>
                      </div>

                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
import React, { useEffect, useState } from 'react'
import './gettingstartedloader.scss'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'
import Spinner from 'react-bootstrap/Spinner'

interface Prop {
    flowcompleted: boolean
}

const Gettingstartedloader = (prop: Prop) => {
    const [ loaderTime, setLoaderTime ] = useState(false)

    useEffect(() => {
        console.log('start')
        setTimeout(() => {
            setLoaderTime(true)
        }, 3500);
    }, [prop.flowcompleted])

  return (
    <div className={`gettingstartedloader d-flex align-items-center justify-content-center`}>
        <div className="card border-0">
            {/* <div className="card-header bg-transparent border-0">
                <Image src='/images/enzol-logo3.png' className='' alt="google icon" width={150} height={40} />
            </div> */}
            <div className="card-body">
                <div className="loadant-container d-flex justify-content-center">

                    <div className="loader d-flex align-items-center justify-content-center me-2">
                        {!loaderTime ? <Spinner animation='border' size='sm' className='spinner-styling' /> : <FaCheckCircle />}
                    </div>
                    <div className="texts-loadants-container">
                        <div className="loadant loadant-1">Saving cred</div>
                        <div className="loadant loadant-2">Setting profile</div>
                        <div className="loadant loadant-3">Getting started</div>
                    </div>

                </div>
            </div>
        </div>

        <div className="absolute-width-coverage">
            <div className="gradient"></div>
            <div className="gradient"></div>
            <div className="gradient-core-1"></div>
            <div className="center-transparency"></div>
            <div className="gradient-core-2"></div>
            <div className="gradient"></div>
            <div className="gradient"></div>
        </div>
    </div>
  )
}

export default Gettingstartedloader;
'use client';
import React, { useState } from 'react'
import './navbar.scss'
import { BRANDNAME } from '@/app/constants/namingconstants'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div className='navbar border-bottom'>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex justify-content-between align-items-center">

                    {/* <div className="launch-offcanvas-btn-container d-none me-3 d-sm-flex d-lg-none justify-content-between align-items-center d-lg-none">
                        <button className="btn d-flex justify-content-between align-items-center mt-1" onClick={handleShow}>
                            <RxHamburgerMenu />
                        </button>
                    </div> */}

                    <div className="logo-container"><Link href='/'>{BRANDNAME}</Link></div>

                </div>
                <div className="navigators-container d-none d-lg-flex justify-content-center align-items-center">
                    <ul className='d-flex justify-content-center align-items-center m-0 p-0'>
                        <li className='d-flex justify-content-center align-items-center px-3 px-lg-4'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='d-flex justify-content-center align-items-center px-3 px-lg-4'>
                            <Link href={'/'}>Pricing</Link>
                        </li>
                        <li className='d-flex justify-content-center align-items-center px-3 px-lg-4'>
                            <Link href={'/'}>About us</Link>
                        </li>
                        <li className='d-flex justify-content-center align-items-center px-3 px-lg-4'>
                            <Link href={'/'}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="auth-btns-container d-flex">
                    <div className="login-btn-container pe-4 pe-lg-4 d-none d-sm-block">
                        <Link href={'/auth/login'}>
                            <button className="btn">Log in</button>
                        </Link>
                    </div>
                    <div className="signup-btn-container d-none d-sm-block">
                        <Link href={'/auth/signup'}>
                            <button className="btn">Sign up</button>
                        </Link>
                    </div>
                    
                    <div className="signup-btn-container d-block d-sm-none">
                        <Link href={'/auth/login'}>
                            <button className="btn">Log in</button>
                        </Link>
                    </div>

                    <div className="launch-offcanvas-btn-container ms-3 ms-sm-4 ms-lg-4 d-flex d-lg-none justify-content-between align-items-center d-lg-none">
                        <button className="btn d-flex justify-content-between align-items-center" onClick={handleShow}>
                            <RxHamburgerMenu />
                        </button>
                    </div>

                </div>

                

                

            </div>
        </div>

        <div className="d-none d-lg-block navbar-offcanvas">
            
            {/* <Button variant="primary" onClick={handleShow}>
                Launch
            </Button> */}

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className='border-bottom' closeButton>
                <Offcanvas.Title>{BRANDNAME}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanvas-container w-100">
                        <ul className="ul p-0 m-0">
                            <li className='border-bottom nav-lists'>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className='border-bottom nav-lists'>
                                <Link href={'/'}>Pricing</Link>
                            </li>
                            <li className='border-bottom nav-lists'>
                                <Link href={'/'}>About us</Link>
                            </li>
                            <li className='border-bottom nav-lists'>
                                <Link href={'/'}>Contact</Link>
                            </li>

                            
                            <li className='copyright-container'>
                                <span className="special">@{BRANDNAME} 2025</span>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    </div>
  )
}

export default Navbar
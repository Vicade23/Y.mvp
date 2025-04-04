'use client';
import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { BRANDNAME } from '@/app/constants/namingconstants'
import Link from 'next/link'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoHome, IoPricetags } from 'react-icons/io5';
import { FaMessage, FaUsers } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { usePathname, useSearchParams } from 'next/navigation';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrollY, setScrollY] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    
    useEffect(() => {
    }, [])

    const pathname = usePathname();
    
    
  return (
    <div className="nav-container">

        <div className={` navbar ${scrollY >= 50 && 'sticky-mode'}`}>
            <div className="container ">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex justify-content-between align-items-center">

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
                                <Link href={'/about-us'}>About us</Link>
                            </li>
                            <li className='d-flex justify-content-center align-items-center px-3 px-lg-4'>
                                <Link href={'/contact-us'}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="auth-btns-container d-flex">
                        <div className="login-btn-container pe-4 pe-lg-4 d-none d-sm-block">
                            <Link href={'/login'}>
                                <button className="btn">Log in</button>
                            </Link>
                        </div>
                        <div className="signup-btn-container d-none d-sm-block">
                            <Link href={'/signup'}>
                                <button className="btn">Sign up</button>
                            </Link>
                        </div>
                        
                        <div className="signup-btn-container d-block d-sm-none">
                            <Link href={'/login'}>
                                <button className="btn">Log in</button>
                            </Link>
                        </div>

                        <div className="launch-offcanvas-btn-container ms-3 ms-sm-4 ms-lg-4 d-flex d-lg-none justify-content-between align-items-center d-lg-none">
                            <button className="btn d-flex justify-content-between align-items-center border"  onClick={handleShow} >
                                <RxHamburgerMenu />
                            </button> 
                        </div>

                    </div>

                </div>
            </div>

            <div className="d-none d-lg-block navbar-offcanvas">

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header className='border-bottom' closeButton>
                    <Offcanvas.Title>{BRANDNAME}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas-container w-100">
                            <ul className="ul p-0 m-0">
                                <li className=' nav-lists'>
                                    <Link href={'/'} onClick={handleClose} className={`${pathname === '/' && 'active'}`}>
                                        <span className="icon me-3">
                                            <IoHome />
                                        </span>
                                        Home
                                    </Link>
                                </li>
                                <li className=' nav-lists'>
                                    <Link href={'/'} onClick={handleClose} className={`${pathname === '/pricing' && 'active'}`}>
                                        <span className="icon me-3">
                                            <IoPricetags />
                                        </span>
                                        Pricing
                                    </Link>
                                </li>
                                <li className=' nav-lists'>
                                    <Link href={'/about-us'} onClick={handleClose} className={`${pathname === '/about-us' && 'active'}`} >
                                        <span className="icon me-3">
                                            <FaUsers />
                                        </span>
                                        About us
                                    </Link>
                                </li>
                                <li className=' nav-lists'>
                                    <Link href={'/contact-us'} onClick={handleClose} className={`${pathname === '/contact-us' && 'active'}`} >
                                        <span className="icon me-3">
                                            <MdMessage />
                                        </span>
                                        Contact
                                    </Link>
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
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import Freequote from './Freequote';

//image
import logo from '../public/images/logo.png';


const Header = () => {

    const [show, setShow] = useState(false);
    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }


    return (
        <>
            <header className={styles.header}>
                <Navbar expand="lg">
                    <Container fluid className='px-md-5'>
                        <Link href="/">
                            <Image quality={100}  className={styles.logo}
                                src={logo}
                                alt='Best_Publisher' />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>
                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={`${styles.menuLinks} active`} href="/">Home</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/service">Service</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="pricing">Pricing</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/blogs">Blogs</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/about">About</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link className={styles.menuLinks} href="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown position-static show">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown"
                                        role="button" aria-expanded="true">Services</a>
                                    <ul className="dropdown-menu megaMenu midmenu">
                                        <div className="row p-4">
                                            <li className="col-lg-4 col-md-4 ">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-publishing-services/">Book
                                                            Publishing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-promotion-services/">Book
                                                            Promotion
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-writing-services/">Book
                                                            Writing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-editing-services/">Book
                                                            Editing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-marketing-services/">Book
                                                            Marketing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-proofreading-services/">Proofreading
                                                            Services</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/ghostwriting-services/">Ghostwriting</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-lg-4 col-md-4 border-left">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/article-writing-services/">Article
                                                            Writing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/blog-writing-services/">Blog
                                                            Writing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-cover-design-services/">Book
                                                            Cover Design
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-trailer-services/">Book
                                                            Trailer</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/business-plan-writing-services/">Business
                                                            Plan Writing</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/children-book-publication-services/">Children
                                                            Book Publication
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/author-marketing-promotion-services/">Author
                                                            Marketing</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-lg-4 col-md-4 d-lg-block d-md-block border-left">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/children-book-illustrations-services/">Children's
                                                            Book
                                                            Illustrations
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/digital-marketing-services/">Digital
                                                            Marketing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/ebook-writing-services/">Ebook
                                                            Writing</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/book-formatting-services/">Formatting
                                                            Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/audiobook-recording-services/">Audio
                                                            Book Recording</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.bookwritingcube.com/web-content-writing-services/">Web
                                                            Content Writing</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.bookwritingcube.com/author-website-design-services/">Author
                                                            Website Design</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li className='btns1'>
                                    <Link className={`${styles.headerIcon} text-prime`} href="tel:(302) 883-8877">
                                        <FaPhoneAlt className={styles.valueNum} size={14} />
                                        | (800) 781-9093 </Link>
                                </li>

                                {/* <li onClick={modal} className='btns1 bg-prime'> <Link className={`${styles.headerIcon} color-white`} href="#">
                                    Get A Quote </Link>
                                </li> */}
                                {/* <li className={styles.lastlink}> <Link className={`${styles.headerIcon} color-white`} href="#">
                                    <span>initial consultation</span>
                                    <span>  Contact: <strong>Amelia</strong> </span>
                                </Link>
                                </li> */}

                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body> <Freequote formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>
            </Modal>


        </>
    )
}

export default Header
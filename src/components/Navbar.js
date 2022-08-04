import React, { useRef, useEffect } from 'react'
import { FaBars } from '../../node_modules/react-icons/fa'
import { BsCart4 } from 'react-icons/bs'
import '../css/index.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { links } from '../data';
import images from '../images/images.jpg'



const Navbar = () => {
    const { showlinks, toggleLinks, totalamount } = useGlobalContext();
    console.log(totalamount);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showlinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showlinks]);
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1 className="logo">Bookdekho</h1>

                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="nav-cart" data-content={totalamount}>
                    <Link to='/cart'>
                        <BsCart4 className='cart-img' />
                        {/* <p className='cart-total'></p> */}
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
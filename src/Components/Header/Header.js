import Navbar from '../Navbar/Navbar'
import {useEffect} from "react";
import logo from '../../images/logo-prima.svg'
import pkg from '../../../package.json'
import './style.css'

export const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.psc-header');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <header className='psc-header'>
            <div className='container-fluid'>
                <div className='logo'>
                    <img src={logo} alt={pkg.name}/>
                </div>

                <Navbar></Navbar>

                <div className='btn-right'>
                    <a href='#book' className='btn btn-primary'>Book Now</a>
                </div>
            </div>
        </header>
    )
}